import { RulebookRepository } from '@/features/admin/application/rulebookRepository';
import { RulebookSummary } from '@/features/admin/domain/rulebook';
import { apiRequest } from '@/shared/infrastructure/http/apiClient';

type RulebookResponse = {
  id: string;
  crop_id: string;
  version: number;
  status: string;
};

type RulebookDetailResponse = RulebookResponse & {
  criteria: unknown[];
  phases: unknown[];
  phase_requirements: unknown[];
};

function getPayloadArrayLength(payload: unknown, key: string): number | undefined {
  if (!payload || typeof payload !== 'object') return undefined;
  const value = (payload as Record<string, unknown>)[key];
  return Array.isArray(value) ? value.length : undefined;
}

export class RulebookApiRepository implements RulebookRepository {
  async listRulebooks(accessToken: string): Promise<RulebookSummary[]> {
    const response = await apiRequest<RulebookResponse[]>('/rulebooks', {
      token: accessToken,
    });

    return Promise.all(response.map(async (rulebook) => {
      const detail = await this.getActiveRulebookDetail(rulebook.crop_id, accessToken);

      return {
        id: rulebook.id,
        cropId: rulebook.crop_id,
        version: rulebook.version,
        status: rulebook.status,
        criteriaCount: detail?.criteria.length,
        phasesCount: detail?.phases.length,
        requirementsCount: detail?.phase_requirements.length,
      };
    }));
  }

  async createRulebook(accessToken: string, payload: unknown): Promise<RulebookSummary> {
    const response = await apiRequest<RulebookResponse>('/rulebooks', {
      method: 'POST',
      token: accessToken,
      body: payload,
    });

    return {
      id: response.id,
      cropId: response.crop_id,
      version: response.version,
      status: response.status,
      criteriaCount: getPayloadArrayLength(payload, 'criteria'),
      phasesCount: getPayloadArrayLength(payload, 'phases'),
      requirementsCount: getPayloadArrayLength(payload, 'phase_requirements'),
    };
  }

  private async getActiveRulebookDetail(cropId: string, accessToken: string): Promise<RulebookDetailResponse | null> {
    try {
      return await apiRequest<RulebookDetailResponse>(`/rulebooks/${cropId}/active`, {
        token: accessToken,
      });
    } catch {
      return null;
    }
  }
}

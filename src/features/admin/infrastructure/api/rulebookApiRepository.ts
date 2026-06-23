import { RulebookRepository } from '@/features/admin/application/rulebookRepository';
import { RulebookSummary } from '@/features/admin/domain/rulebook';
import { apiRequest } from '@/shared/infrastructure/http/apiClient';

type RulebookResponse = {
  id: string;
  crop_id: string;
  version: number;
  status: string;
};

export class RulebookApiRepository implements RulebookRepository {
  async listRulebooks(accessToken: string): Promise<RulebookSummary[]> {
    const response = await apiRequest<RulebookResponse[]>('/rulebooks', {
      token: accessToken,
    });

    return response.map((rulebook) => ({
      id: rulebook.id,
      cropId: rulebook.crop_id,
      version: rulebook.version,
      status: rulebook.status,
    }));
  }
}

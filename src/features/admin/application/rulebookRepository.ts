import { RulebookSummary } from '@/features/admin/domain/rulebook';

export interface RulebookRepository {
  listRulebooks(accessToken: string): Promise<RulebookSummary[]>;
  createRulebook(accessToken: string, payload: unknown): Promise<RulebookSummary>;
}

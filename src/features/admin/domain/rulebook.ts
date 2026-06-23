export type RulebookStatus = 'DRAFT' | 'ACTIVE' | 'INACTIVE' | string;

export type RulebookSummary = {
  id: string;
  cropId: string;
  version: number;
  status: RulebookStatus;
};

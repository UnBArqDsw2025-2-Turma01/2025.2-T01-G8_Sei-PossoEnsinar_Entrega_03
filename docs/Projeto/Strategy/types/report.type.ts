export type ReportType = 'no-show' | 'inappropriate' | 'spam';

export type Report = {
  type: ReportType;
  reportandoId: number;
  reportadoId: number;
  motivo: string;
};
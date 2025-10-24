import { IReportProcessingStrategy } from './report-strategy.interface';
import { Report } from '../types/report.type';

export class InappropriateContentStrategy implements IReportProcessingStrategy {
  processReport(report: Report): void {
    console.log(`[InappropriateContentStrategy] Processando reporte de conteúdo inapropriado do usuário ${report.reportadoId}.`);
  }
}
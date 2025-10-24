import { IReportProcessingStrategy } from './report-strategy.interface';
import { Report } from '../types/report.type';

export class SpamRequestStrategy implements IReportProcessingStrategy {
  processReport(report: Report): void {
    console.log(`[SpamRequestStrategy] Processando reporte de spam do Aluno ${report.reportadoId}.`);
  }
}
import { IReportProcessingStrategy } from './report-strategy.interface';
import { Report } from '../types/report.type';

export class MonitorNoShowStrategy implements IReportProcessingStrategy {
  processReport(report: Report): void {
    console.log(`[MonitorNoShowStrategy] Processando reporte: Aluno ${report.reportandoId} reportou Monitor ${report.reportadoId} por não comparecer.`);
  }
}
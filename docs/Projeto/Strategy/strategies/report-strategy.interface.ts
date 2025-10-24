// Precisamos importar o tipo Report da pasta 'types'
import { Report } from '../types/report.type';

export interface IReportProcessingStrategy {
  processReport(report: Report): void;
}
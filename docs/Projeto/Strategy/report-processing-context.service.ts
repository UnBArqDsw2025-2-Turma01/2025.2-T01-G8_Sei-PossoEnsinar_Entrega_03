import { Injectable } from '@nestjs/common';
import { Report } from './types/report.type';
import { IReportProcessingStrategy } from './strategies/report-strategy.interface';

@Injectable()
export class ReportProcessingContext {
  private strategy!: IReportProcessingStrategy;

  setStrategy(strategy: IReportProcessingStrategy) {
    this.strategy = strategy;
  }

  executeProcessing(report: Report) {
    if (!this.strategy) {
      throw new Error('Nenhuma estratégia de processamento foi definida.');
    }
    this.strategy.processReport(report);
  }
}
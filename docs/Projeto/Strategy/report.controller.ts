import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { ReportProcessingContext } from './report-processing-context.service';
import { Report } from './types/report.type';

import { MonitorNoShowStrategy } from './strategies/monitor-no-show.strategy';
import { InappropriateContentStrategy } from './strategies/inappropriate-content.strategy';
import { SpamRequestStrategy } from './strategies/spam-request.strategy';

@Controller('report')
export class ReportController {
  constructor(private readonly reportContext: ReportProcessingContext) {}

  @Post()
  handleReport(@Body() report: Report) {
    switch (report.type) {
      case 'no-show':
        this.reportContext.setStrategy(new MonitorNoShowStrategy());
        break;
      case 'inappropriate':
        this.reportContext.setStrategy(new InappropriateContentStrategy());
        break;
      case 'spam':
        this.reportContext.setStrategy(new SpamRequestStrategy());
        break;
      default:
        throw new BadRequestException(`Tipo de reporte não suportado: ${report.type}`);
    }
    this.reportContext.executeProcessing(report);
    return { message: 'Reporte processado com sucesso.' };
  }
}
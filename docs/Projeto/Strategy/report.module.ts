import { Module } from '@nestjs/common';
import { ReportProcessingContext } from './report-processing-context.service';
import { ReportController } from './report.controller';

@Module({
  providers: [ReportProcessingContext],
  controllers: [ReportController],
})
export class ReportModule {}
import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { PrismaModule } from '../../application-modules/prisma/prisma.module';

@Module({
  controllers: [IncomeController],
  providers: [IncomeService],
  imports: [PrismaModule],
})
export class IncomeModule {}

import { Module } from '@nestjs/common';
import { ObligationController } from './obligation.controller';
import { ObligationService } from './obligation.service';
import { PrismaModule } from '../../application-modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ObligationController],
  providers: [ObligationService],
})
export class ObligationModule {}

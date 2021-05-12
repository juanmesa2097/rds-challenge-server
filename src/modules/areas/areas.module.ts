import { Module } from '@nestjs/common';
import { AreasController } from './areas.controller';
import { AreasService } from './areas.service';

@Module({
  providers: [AreasService],
  controllers: [AreasController],
})
export class AreasModule {}

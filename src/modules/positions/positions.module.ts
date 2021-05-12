import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionsController } from './positions.controller';
import { PositionsRepository } from './positions.repository';
import { PositionsService } from './positions.service';

@Module({
  imports: [TypeOrmModule.forFeature([PositionsRepository])],
  controllers: [PositionsController],
  providers: [PositionsService],
})
export class PositionsModule {}

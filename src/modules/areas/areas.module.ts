import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasController } from './areas.controller';
import { AreasRepository } from './areas.repository';
import { AreasService } from './areas.service';

@Module({
  imports: [TypeOrmModule.forFeature([AreasRepository])],
  providers: [AreasService],
  controllers: [AreasController],
})
export class AreasModule {}

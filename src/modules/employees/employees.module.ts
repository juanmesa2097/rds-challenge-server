import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from './employees.controller';
import { EmployeesRepository } from './employees.repository';
import { EmployeesService } from './employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesRepository])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}

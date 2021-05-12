import { WrapperResult } from '@common/interfaces';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddEmployeeDto } from './dtos/add-employee.dto';
import { GetEmployeeDto } from './dtos/get-employee.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  async getAll(): Promise<WrapperResult<GetEmployeeDto[]>> {
    return await this.employeesService.getAll();
  }

  @Get(':id')
  async getById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<GetEmployeeDto> {
    return await this.employeesService.getById(id);
  }

  @Post()
  async create(
    @Body() addEmployeeDto: AddEmployeeDto,
  ): Promise<GetEmployeeDto> {
    return await this.employeesService.create(addEmployeeDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() addEmployeeDto: AddEmployeeDto,
  ): Promise<GetEmployeeDto> {
    return await this.employeesService.update(id, addEmployeeDto);
  }

  @Delete(':id')
  async delete(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<GetEmployeeDto> {
    return await this.employeesService.delete(id);
  }
}

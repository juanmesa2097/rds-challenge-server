import { WrapperResult } from '@common/interfaces';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { AddEmployeeDto } from './dtos/add-employee.dto';
import { GetEmployeeDto } from './dtos/get-employee.dto';
import { UpdateEmployeeDto } from './dtos/update-employee.dto';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async getAll(): Promise<WrapperResult<GetEmployeeDto[]>> {
    try {
      const [result, total] = await this.employeesRepository.findAndCount();

      return {
        data: result.map((employee) => plainToClass(GetEmployeeDto, employee)),
        meta: { count: total },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getById(id: number): Promise<GetEmployeeDto> {
    try {
      const employee = await this.employeesRepository
        .createQueryBuilder('employee')
        .addSelect('employee.id', 'id')
        .addSelect('employee.name', 'name')
        .addSelect('employee.username', 'username')
        .addSelect('employee.username', 'username')
        .addSelect('employee.dateOfBirth', 'dateOfBirth')
        .addSelect('employee.country', 'country')
        .addSelect('employee.commission', 'commission')
        .addSelect('employee.hiringDate', 'hiringDate')
        .addSelect('employee.position_id', 'positionId')
        .addSelect('employee.status', 'status')
        .addSelect('employee.created_at', 'createdAt')
        .addSelect('employee.updated_at', 'updatedAt')
        .addSelect('area.id', 'areaId')
        .innerJoin('employee.position', 'position')
        .innerJoin('position.area', 'area')
        .where('employee.id = :id', { id })
        .getRawOne();

      if (!employee) {
        throw new NotFoundException(`Employee not found`);
      }

      return plainToClass(GetEmployeeDto, employee);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async create(addEmployeeDto: AddEmployeeDto): Promise<GetEmployeeDto> {
    const employeeToSave = classToPlain(addEmployeeDto);
    const newEmployee = this.employeesRepository.create(employeeToSave);
    await this.employeesRepository.save(newEmployee);
    return plainToClass(GetEmployeeDto, newEmployee);
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<GetEmployeeDto> {
    const employee = await this.employeesRepository.findOne(id, {
      loadEagerRelations: false,
    });

    if (!employee) {
      throw new NotFoundException(`Employee not found`);
    }

    const employeeToUpdate = classToPlain(updateEmployeeDto);
    await this.employeesRepository.merge(employee, employeeToUpdate).save();
    await employee.reload();
    return plainToClass(GetEmployeeDto, employee);
  }

  async delete(id: number): Promise<GetEmployeeDto> {
    const employee = await this.employeesRepository.findOne(id, {
      loadEagerRelations: false,
    });

    if (!employee) {
      throw new NotFoundException(`Employee not found`);
    }

    await this.employeesRepository.delete(id);
    return plainToClass(GetEmployeeDto, employee);
  }
}

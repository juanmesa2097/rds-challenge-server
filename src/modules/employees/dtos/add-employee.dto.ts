import { OmitType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { EmployeeDto } from './employee.dto';

@Exclude()
export class AddEmployeeDto extends OmitType(EmployeeDto, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}

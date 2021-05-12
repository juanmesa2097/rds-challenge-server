import { OmitType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { EmployeeDto } from './employee.dto';

@Exclude()
export class GetEmployeeDto extends OmitType(EmployeeDto, [] as const) {}

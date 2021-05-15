import { OmitType, PartialType } from '@nestjs/mapped-types';
import { AddEmployeeDto } from './add-employee.dto';

export class UpdateEmployeeDto extends PartialType(
  OmitType(AddEmployeeDto, ['name'] as const),
) {}

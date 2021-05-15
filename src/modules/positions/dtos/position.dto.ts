import { AbstractBaseDto } from '@common/dtos/abstract-base.dto';
import { AreaDto } from '@modules/areas/dtos/area.dto';
import { EmployeeDto } from '@modules/employees/dtos/employee.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

@Exclude()
export class PositionDto extends AbstractBaseDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  name: string;

  @Expose()
  @IsString()
  @MaxLength(5)
  validationCode: string;

  @Expose()
  @Type(() => AreaDto)
  area: AreaDto;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  areaId: number;

  @Expose()
  @Type(() => EmployeeDto)
  employees: EmployeeDto[];
}

import { AbstractBaseDto } from '@common/dtos/abstract-base.dto';
import { PositionDto } from '@modules/positions/dtos/position.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

@Exclude()
export class EmployeeDto extends AbstractBaseDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(25)
  username: string;

  @Expose()
  @Type(() => Date)
  @IsDate()
  dateOfBirth: Date;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(3)
  country: string;

  @Expose()
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  commission: number;

  @Expose()
  @Type(() => Date)
  @IsDate()
  hiringDate: Date;

  @Expose()
  @Type(() => PositionDto)
  position: PositionDto;
}

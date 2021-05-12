import { AbstractBaseDto } from '@common/dtos/abstract-base.dto';
import { PositionDto } from '@modules/positions/dtos/position.dto';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@Exclude()
export class AreaDto extends AbstractBaseDto {
  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  name: string;

  @Expose()
  @Type(() => PositionDto)
  positions: PositionDto[];
}

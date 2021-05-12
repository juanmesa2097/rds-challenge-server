import { OmitType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { PositionDto } from './position.dto';

@Exclude()
export class AddPositionDto extends OmitType(PositionDto, [
  'id',
  'createdAt',
  'updatedAt',
  'employees',
  'status',
] as const) {}

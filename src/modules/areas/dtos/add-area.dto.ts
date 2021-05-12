import { OmitType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { AreaDto } from './area.dto';

@Exclude()
export class AddAreaDto extends OmitType(AreaDto, [
  'id',
  'createdAt',
  'updatedAt',
  'positions',
  'status',
] as const) {}

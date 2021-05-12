import { OmitType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { AreaDto } from './area.dto';

@Exclude()
export class GetAreaDto extends OmitType(AreaDto, [] as const) {}

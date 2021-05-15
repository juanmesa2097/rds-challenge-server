import { OmitType } from '@nestjs/mapped-types';
import { Exclude } from 'class-transformer';
import { PositionDto } from './position.dto';

@Exclude()
export class GetPositionDto extends OmitType(PositionDto, [] as const) {}

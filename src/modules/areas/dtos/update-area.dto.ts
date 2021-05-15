import { PartialType } from '@nestjs/mapped-types';
import { AddAreaDto } from './add-area.dto';

export class UpdateAreaDto extends PartialType(AddAreaDto) {}

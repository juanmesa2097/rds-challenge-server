import { WrapperResult } from '@common/interfaces';
import { AddAreaDto } from '@modules/areas/dtos/add-Area.dto';
import { GetAreaDto } from '@modules/areas/dtos/get-Area.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AreasService } from './areas.service';
import { UpdateAreaDto } from './dtos/update-area.dto';

@Controller('areas')
export class AreasController {
  constructor(private areasService: AreasService) {}

  @Get()
  async getAll(): Promise<WrapperResult<GetAreaDto[]>> {
    return await this.areasService.getAll();
  }

  @Post()
  async create(@Body() addAreaDto: AddAreaDto): Promise<GetAreaDto> {
    return await this.areasService.create(addAreaDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateAreaDto: UpdateAreaDto,
  ): Promise<GetAreaDto> {
    return await this.areasService.update(id, updateAreaDto);
  }

  @Delete(':id')
  async delete(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<GetAreaDto> {
    return await this.areasService.delete(id);
  }
}

import { WrapperResult } from '@common/interfaces';
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
import { AddPositionDto } from './dtos/add-position.dto';
import { GetPositionDto } from './dtos/get-position.dto';
import { UpdatePositionDto } from './dtos/update-position.dto';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}

  @Get()
  async getAll(): Promise<WrapperResult<GetPositionDto[]>> {
    return await this.positionsService.getAll();
  }

  @Get('area/:areaId')
  async getByAreaId(
    @Param('areaId', new ParseIntPipe()) PositionId: number,
  ): Promise<WrapperResult<GetPositionDto[]>> {
    return await this.positionsService.getByAreaId(PositionId);
  }

  @Post()
  async create(
    @Body() addPositionDto: AddPositionDto,
  ): Promise<GetPositionDto> {
    return await this.positionsService.create(addPositionDto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updatePositionDto: UpdatePositionDto,
  ): Promise<GetPositionDto> {
    return await this.positionsService.update(id, updatePositionDto);
  }

  @Delete(':id')
  async delete(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<GetPositionDto> {
    return await this.positionsService.delete(id);
  }
}

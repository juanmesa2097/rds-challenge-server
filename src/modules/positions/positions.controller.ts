import { WrapperResult } from '@common/interfaces';
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GetPositionDto } from './dtos/get-position.dto';
import { PositionsService } from './positions.service';

@Controller('positions')
export class PositionsController {
  constructor(private positionsService: PositionsService) {}

  @Get('area/:areaId')
  async getAll(
    @Param('areaId', new ParseIntPipe()) areaId: number,
  ): Promise<WrapperResult<GetPositionDto[]>> {
    return await this.positionsService.getByAreaId(areaId);
  }
}

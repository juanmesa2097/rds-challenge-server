import { WrapperResult } from '@common/interfaces';
import { Controller, Get } from '@nestjs/common';
import { AreasService } from './areas.service';
import { GetAreaDto } from './dtos/get-area.dto';

@Controller('areas')
export class AreasController {
  constructor(private areasService: AreasService) {}

  @Get()
  async getAll(): Promise<WrapperResult<GetAreaDto[]>> {
    return await this.areasService.getAll();
  }
}

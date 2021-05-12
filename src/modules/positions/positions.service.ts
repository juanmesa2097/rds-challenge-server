import { WrapperResult } from '@common/interfaces';
import { BadRequestException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { GetPositionDto } from './dtos/get-position.dto';
import { PositionsRepository } from './positions.repository';

@Injectable()
export class PositionsService {
  constructor(private readonly positionsRepository: PositionsRepository) {}

  async getByAreaId(areaId: number): Promise<WrapperResult<GetPositionDto[]>> {
    try {
      const [result, total] = await this.positionsRepository.findAndCount({
        where: { area: areaId },
      });

      return {
        data: result.map((position) => plainToClass(GetPositionDto, position)),
        meta: { count: total },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}

import { WrapperResult } from '@common/interfaces';
import { BadRequestException, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { AreasRepository } from './areas.repository';
import { GetAreaDto } from './dtos/get-area.dto';

@Injectable()
export class AreasService {
  constructor(private readonly areasRepository: AreasRepository) {}

  async getAll(): Promise<WrapperResult<GetAreaDto[]>> {
    try {
      const [result, total] = await this.areasRepository.findAndCount();

      return {
        data: result.map((area) => plainToClass(GetAreaDto, area)),
        meta: { count: total },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}

import { WrapperResult } from '@common/interfaces';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { AreasRepository } from './areas.repository';
import { AddAreaDto } from './dtos/add-area.dto';
import { GetAreaDto } from './dtos/get-area.dto';
import { UpdateAreaDto } from './dtos/update-area.dto';

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

  async create(addAreaDto: AddAreaDto): Promise<GetAreaDto> {
    const areaToSave = classToPlain(addAreaDto);
    const newArea = this.areasRepository.create(areaToSave);
    await this.areasRepository.save(newArea);
    return plainToClass(GetAreaDto, areaToSave);
  }

  async update(id: number, updateAreaDto: UpdateAreaDto): Promise<GetAreaDto> {
    const area = await this.areasRepository.findOne(id, {
      loadEagerRelations: false,
    });

    if (!area) {
      throw new NotFoundException(`Area not found`);
    }

    const areaToUpdate = classToPlain(updateAreaDto);
    await this.areasRepository.merge(area, areaToUpdate).save();
    await area.reload();
    return plainToClass(GetAreaDto, area);
  }

  async delete(id: number): Promise<GetAreaDto> {
    const area = await this.areasRepository.findOne(id, {
      loadEagerRelations: false,
    });

    if (!area) {
      throw new NotFoundException(`Area not found`);
    }

    await this.areasRepository.delete(id);
    return plainToClass(GetAreaDto, area);
  }
}

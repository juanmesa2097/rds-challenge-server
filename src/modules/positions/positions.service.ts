import { WrapperResult } from '@common/interfaces';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { classToPlain, plainToClass } from 'class-transformer';
import { AddPositionDto } from './dtos/add-position.dto';
import { GetPositionDto } from './dtos/get-position.dto';
import { UpdatePositionDto } from './dtos/update-position.dto';
import { PositionsRepository } from './positions.repository';

@Injectable()
export class PositionsService {
  constructor(private readonly positionsRepository: PositionsRepository) {}

  async getAll(): Promise<WrapperResult<GetPositionDto[]>> {
    try {
      const [result, total] = await this.positionsRepository.findAndCount();

      return {
        data: result.map((position) => plainToClass(GetPositionDto, position)),
        meta: { count: total },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async getByAreaId(areaId: number): Promise<WrapperResult<GetPositionDto[]>> {
    try {
      const [result, total] = await this.positionsRepository.findAndCount({
        where: { areaId },
        loadEagerRelations: false,
      });

      return {
        data: result.map((position) => plainToClass(GetPositionDto, position)),
        meta: { count: total },
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async create(addPositionDto: AddPositionDto): Promise<GetPositionDto> {
    const positionToSave = classToPlain(addPositionDto);
    const newPosition = this.positionsRepository.create(positionToSave);
    await this.positionsRepository.save(newPosition);
    return plainToClass(GetPositionDto, newPosition);
  }

  async update(
    id: number,
    updatePositionDto: UpdatePositionDto,
  ): Promise<GetPositionDto> {
    const position = await this.positionsRepository.findOne(id, {
      loadEagerRelations: false,
    });

    if (!position) {
      throw new NotFoundException(`Position not found`);
    }

    const positionToUpdate = classToPlain(updatePositionDto);
    await this.positionsRepository.merge(position, positionToUpdate).save();
    await position.reload();
    return plainToClass(GetPositionDto, position);
  }

  async delete(id: number): Promise<GetPositionDto> {
    const position = await this.positionsRepository.findOne(id, {
      loadEagerRelations: false,
    });

    if (!position) {
      throw new NotFoundException(`Position not found`);
    }

    await this.positionsRepository.delete(id);
    return plainToClass(GetPositionDto, position);
  }
}

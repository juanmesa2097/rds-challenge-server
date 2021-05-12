import { EntityRepository, Repository } from 'typeorm';
import { AreaEntity } from './area.entity';

@EntityRepository(AreaEntity)
export class AreasRepository extends Repository<AreaEntity> {}

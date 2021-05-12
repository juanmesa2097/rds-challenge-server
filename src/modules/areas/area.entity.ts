import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { PositionEntity } from '@modules/positions/position.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('area')
export class AreaEntity extends AbstractBaseEntity {
  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  name: string;

  @OneToMany(() => PositionEntity, (position) => position.areaId)
  positions: PositionEntity[];
}

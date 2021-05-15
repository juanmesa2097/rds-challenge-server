import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { AreaEntity } from '@modules/areas/area.entity';
import { EmployeeEntity } from '@modules/employees/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  RelationId,
} from 'typeorm';

@Entity('position')
export class PositionEntity extends AbstractBaseEntity {
  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'validation_code',
    length: 5,
    nullable: true,
  })
  validationCode: string;

  @ManyToOne(() => AreaEntity, (area) => area.positions, {
    eager: true,
  })
  @JoinColumn({ name: 'area_id' })
  area: AreaEntity;

  @Column({ name: 'area_id' })
  @RelationId((position: PositionEntity) => position.area)
  areaId: number;

  @OneToMany(() => EmployeeEntity, (employee) => employee.positionId)
  employees: EmployeeEntity[];
}

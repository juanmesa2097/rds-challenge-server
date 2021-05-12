import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { AreaEntity } from '@modules/areas/area.entity';
import { EmployeeEntity } from '@modules/employees/employee.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('position')
export class PositionEntity extends AbstractBaseEntity {
  @Column({
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  name: string;

  @ManyToOne(() => AreaEntity, (area) => area.positions, {
    eager: true,
  })
  @JoinColumn({ name: 'area_id' })
  areaId: AreaEntity;

  @OneToMany(() => EmployeeEntity, (employee) => employee.positionId)
  employees: EmployeeEntity[];
}

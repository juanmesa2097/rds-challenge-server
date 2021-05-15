import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { PositionEntity } from '@modules/positions/position.entity';
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from 'typeorm';

@Entity('employee')
export class EmployeeEntity extends AbstractBaseEntity {
  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 25,
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({ name: 'date_of_birth', type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  country: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  countryFlagUrl: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  avatarUrl: string;

  @Column({
    type: 'integer',
    nullable: true,
  })
  commission: number;

  @Column({ name: 'hiring_date', type: 'date', nullable: true })
  hiringDate: Date;

  @ManyToOne(() => PositionEntity, (position) => position.employees, {
    eager: true,
  })
  @JoinColumn({ name: 'position_id' })
  position: PositionEntity;

  @Column({ name: 'position_id' })
  @RelationId((employee: EmployeeEntity) => employee.position)
  positionId: number;
}

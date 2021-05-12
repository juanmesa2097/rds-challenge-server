import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { PositionEntity } from '@modules/positions/position.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

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
    length: 3,
    nullable: false,
  })
  country: string;

  @Column({
    type: 'integer',
    nullable: false,
  })
  commission: number;

  @Column({ name: 'hiring_date', type: 'date', nullable: true })
  hiringDate: Date;

  @ManyToOne(() => PositionEntity, (position) => position.employees)
  position: PositionEntity;
}

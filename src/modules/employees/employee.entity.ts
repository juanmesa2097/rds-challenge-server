import { AbstractBaseEntity } from '@common/entities/abstract-base.entity';
import { Column } from 'typeorm';
import { EmployeeArea } from './enums/employee-area.enum';

export default class EmployeeEntity extends AbstractBaseEntity {
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
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  area: EmployeeArea;

  @Column({
    type: 'tinyint',
    nullable: false,
  })
  commission: number;

  @Column({ name: 'hiring_date', type: 'date', nullable: true })
  hiringDate: Date;

  //   position: GenericType;
}

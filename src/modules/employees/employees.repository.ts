import { EntityRepository, Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@EntityRepository(EmployeeEntity)
export class EmployeesRepository extends Repository<EmployeeEntity> {}

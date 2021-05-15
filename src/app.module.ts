import { AreasModule } from '@modules/areas/areas.module';
import { EmployeesModule } from '@modules/employees/employees.module';
import { PositionsModule } from '@modules/positions/positions.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresProviderModule } from './providers/database/postgres-provider.module';

@Module({
  imports: [
    PostgresProviderModule,
    EmployeesModule,
    PositionsModule,
    AreasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

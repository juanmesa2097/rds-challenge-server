import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();

export class ConfigService {
  constructor(private env: { [key: string]: string | undefined }) {}

  isProduction(): boolean {
    const mode = this.getValue('APP_MODE', false);
    return mode !== 'DEV';
  }

  getPort(): number {
    return +this.getValue('APP_PORT');
  }

  getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: +this.getValue('POSTGRES_PORT'),
      username: this.getValue('POSTGRES_USERNAME'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      synchronize: Boolean(this.getValue('SYNCHRONIZE', false)),
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      ssl: this.isProduction(),
    };
  }

  ensureValues(keys: string[]): ConfigService {
    keys.forEach((k) => this.getValue(k));
    return this;
  }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];

    if (!value && throwOnMissing) {
      throw new Error(`Config error: missing env.${key}`);
    }

    return value;
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USERNAME',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };

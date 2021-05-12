import { Exclude, Expose, Type } from 'class-transformer';
import { IsBoolean, IsDate } from 'class-validator';

@Exclude()
export abstract class AbstractBaseDto {
  @Expose()
  id: string;

  @Expose()
  @IsBoolean()
  status: boolean;

  @Expose()
  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @Expose()
  @Type(() => Date)
  @IsDate()
  updatedAt: Date;
}

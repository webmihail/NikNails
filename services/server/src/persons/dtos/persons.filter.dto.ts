import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PersonsFilterDTO {
  @IsOptional()
  @IsNumber()
  take: number;

  @IsOptional()
  @IsNumber()
  skip: number;

  @IsOptional()
  @IsString()
  search: string | null;
}

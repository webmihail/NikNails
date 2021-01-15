import { IsNumber, IsOptional, IsString } from 'class-validator';

export class DataRecordDTO {
  @IsOptional()
  @IsNumber()
  personId: number;

  @IsOptional()
  time: Date;

  @IsString()
  type: string;

  @IsString()
  status: string;
}

import { PersonDTO } from 'src/persons/dtos';
import {
  IsNumber,
  IsOptional,
  IsDate,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FormatRecordsDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsDate()
  time: Date;

  @IsString()
  type: string;

  @IsString()
  status: string;

  @ValidateNested()
  person: PersonDTO;
}

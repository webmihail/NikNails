import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PersonDTO } from 'src/persons/dtos';

export class RecordDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  date: Date;

  @IsString()
  type: string;

  @IsString()
  status: string;

  @ValidateNested()
  person: PersonDTO;
}
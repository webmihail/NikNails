import {
  IsString,
  IsNumber,
  IsOptional,
  MaxLength
} from 'class-validator';

export class PersonFormatDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  @MaxLength(255)
  firstName: string;

  @IsString()
  @MaxLength(255)
  lastName: string;
}
import {
  IsString,
  IsNumber,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

export class PersonDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  @MaxLength(255)
  firstName: string;

  @IsString()
  @MaxLength(255)
  lastName: string;

  @IsString()
  @MinLength(6)
  @MaxLength(128)
  phoneNumber: string;
}

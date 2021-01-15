import {
  IsString,
  IsNumber,
  IsOptional,
  IsEmail,
  MaxLength,
  MinLength,
  IsBoolean,
} from 'class-validator';

export class UserDTO {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  @MaxLength(255)
  firstName: string;

  @IsString()
  @MaxLength(255)
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(128)
  password: string;

  @IsOptional()
  @IsBoolean()
  status: boolean;
}

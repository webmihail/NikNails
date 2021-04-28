import {
  IsString,
  IsNumber,
  MaxLength,
} from 'class-validator';

export class AccessTokenDTO {
  @IsString()
  @MaxLength(255)
  token: string;

  @IsNumber()
  expirationDate: number;
}

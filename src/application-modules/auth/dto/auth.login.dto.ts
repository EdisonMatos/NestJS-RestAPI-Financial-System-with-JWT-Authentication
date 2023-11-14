import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthLoginDTO {
  @ApiProperty({
    description: 'Email for login',
    default: 'gabrielqueiroz@hotmail.com',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password for login',
    default: '1234@Abcd',
    type: String,
  })
  @IsString()
  @MinLength(6)
  password: string;
}

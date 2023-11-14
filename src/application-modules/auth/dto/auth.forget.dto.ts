import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class AuthForgetDTO {
  @ApiProperty({
    description: 'Forget password request',
    default: 'gabrielqueiroz@hotmail.com',
    type: String,
  })
  @IsEmail()
  email: string;
}

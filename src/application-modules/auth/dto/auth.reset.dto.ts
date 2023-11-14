import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsString, MinLength } from 'class-validator';

export class AuthResetDTO {
  @ApiProperty({
    description: 'Email for change password',
    default: 'gabrielqueiroz@hotmail.com',
    type: String,
  })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description: 'Token JWT',
    default:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NDYyZGNhLTRiMTgtNDBkNi1iNTg4LWMwYzM1ZDUxNDgwOCIsIm5hbWUiOiJFZCIsImVtYWlsIjoiZWRAaG90bWFpbC5jb20iLCJpYXQiOjE2OTE5OTA3NDUsImV4cCI6MTY5MjU5NTU0NSwiYXVkIjoiY3VzdG9tZXJzIiwiaXNzIjoibG9naW4iLCJzdWIiOiI2OTQ2MmRjYS00YjE4LTQwZDYtYjU4OC1jMGMzNWQ1MTQ4MDgifQ.lPjVfdkhHZCKObSBOKGT5Txp-4alLpqr1_Z17_ShdXA',
    type: String,
  })
  @IsJWT()
  token: string;
}

import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  IsISO8601,
  IsEnum,
} from 'class-validator';
import { Customer } from '../entities/customer.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateCustomerDto extends Customer {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer email',
    default: 'edison@gmail.com',
    type: String,
  })
  email: string;

  @IsStrongPassword()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer password',
    default: '1234@Abcd',
    type: String,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer name',
    default: 'Edison Matos',
    type: String,
  })
  name: string;

  @IsString()
  @IsPhoneNumber('BR')
  @ApiProperty({
    description: 'Customer phone number',
    default: '5561992781077',
    type: String,
  })
  phone: string;

  @IsISO8601()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer birth date',
    default: '1992-06-28',
    type: Date,
  })
  birthdate: string;

  @IsEnum(Role)
  @ApiProperty({
    description: 'User role (Admin or Customer)',
    default: 'Customer',
    enum: Role,
  })
  role: Role;
}

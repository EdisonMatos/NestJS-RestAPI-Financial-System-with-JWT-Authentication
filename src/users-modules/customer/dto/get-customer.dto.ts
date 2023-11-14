import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  IsISO8601,
} from 'class-validator';
import { Customer } from '../entities/customer.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetCustomerDto extends Customer {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer email',
    default: 'gabrielqueiroz@hotmail.com',
    type: String,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer name',
    default: 'Gabriel Queiroz',
    type: String,
  })
  name: string;

  @IsString()
  @IsPhoneNumber('BR')
  @ApiProperty({
    description: 'Customer phone number',
    default: '557388015449',
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
}

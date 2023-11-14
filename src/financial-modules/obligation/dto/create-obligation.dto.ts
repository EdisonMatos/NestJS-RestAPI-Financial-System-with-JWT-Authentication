import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateObligationDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer id',
    default: 'ab485926-9f27-4932-85a4-03d0e76e528c',
    type: String,
  })
  customerId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Obligation name',
    default: 'Conta de energia',
    type: String,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Any observation about the obligation',
    default: 'Retirar no site da empresa',
    type: String,
  })
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Obligation price',
    default: 14.9,
    type: Number,
  })
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Obligation payment status',
    default: false,
    type: Boolean,
  })
  isPaid: boolean;

  @IsISO8601()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date that obligation should be paid',
    default: '2023-12-31',
    type: Date,
  })
  dueDate: string;

  @IsISO8601()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date that obligation was paid',
    default: '2023-12-31',
    type: Date,
  })
  paymentDate: string;
}

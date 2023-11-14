import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsISO8601,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateIncomeDTO {
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
    description: 'Income name',
    default: 'Salário',
    type: String,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Any observation about the income',
    default: 'Conferir contracheque no site',
    type: String,
  })
  description: string;

  @IsISO8601()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date that the income should be received',
    default: '2023-12-31',
    type: Date,
  })
  dueDate: string;

  @IsISO8601()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date the the income was received',
    default: '2023-12-31',
    type: Date,
  })
  receiptDate: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Income price',
    default: 10,
    type: Number,
  })
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Income receivement status',
    default: false,
    type: Boolean,
  })
  isPaid: boolean;
}

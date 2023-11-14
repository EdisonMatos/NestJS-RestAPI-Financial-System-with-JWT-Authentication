import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSubscriptionDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Membership id to link with',
    default: 'ab485926-9f27-4932-85a4-03d0e76e528c',
    type: String,
  })
  membershipId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Customer id to link with',
    default: 'ab485926-9f27-4932-85a4-03d0e76e528c',
    type: String,
  })
  customerId: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Status of subscription payment',
    default: false,
    type: Boolean,
  })
  isPaid: boolean;
}

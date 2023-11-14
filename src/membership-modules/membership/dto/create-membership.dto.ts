import { ApiProperty } from '@nestjs/swagger';
import { MembershipType } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMembershipDto {
  @IsNumber()
  @ApiProperty({
    description: 'Membership price',
    default: 14.9,
    type: Number,
  })
  price: number;

  @IsString()
  @IsOptional()
  @IsEnum(MembershipType)
  @ApiProperty({
    description: 'Membership name',
    enum: MembershipType,
    default: 'Personal',
  })
  name: MembershipType;
}

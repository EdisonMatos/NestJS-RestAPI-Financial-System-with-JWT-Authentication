import { ApiProperty } from '@nestjs/swagger';
import { MembershipType } from '@prisma/client';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetMembershipDto {
  @IsString()
  @ApiProperty({
    description: 'Membership id',
    default: '8e27eb25-47fa-49c4-a549-da54880ee2a2',
    type: String,
  })
  id: string;

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

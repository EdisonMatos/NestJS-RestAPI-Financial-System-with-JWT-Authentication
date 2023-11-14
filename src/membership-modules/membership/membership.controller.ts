import {
  Controller,
  Post,
  Body,
  HttpStatus,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { GetMembershipDto } from './dto/get-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';

@ApiTags('Memberships')
@Controller('memberships')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService) {}

  @ApiBody({ type: CreateMembershipDto })
  @ApiOperation({ summary: 'Create membership' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The membership has been created successfully',
    type: CreateMembershipDto,
  })
  @Post()
  async create(@Body() data: CreateMembershipDto) {
    return this.membershipService.create(data);
  }

  @ApiOperation({ summary: 'List all memberships' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The membership list has been returned successfully.',
    type: [GetMembershipDto],
  })
  @Get()
  findAll(): Promise<GetMembershipDto[]> {
    return this.membershipService.findAll();
  }

  @ApiOperation({ summary: 'List specified membership' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The membership has been returned successfully.',
    type: GetMembershipDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membershipService.findOne(id);
  }

  @ApiOperation({ summary: 'Update memberships info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The membership info has been updated successfully.',
    type: UpdateMembershipDto,
  })
  @Patch(':id')
  async update(@Body() data: UpdateMembershipDto, @Param('id') id: string) {
    return this.membershipService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete specified membership' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The membership has been deleted.',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.membershipService.delete(id);
  }
}

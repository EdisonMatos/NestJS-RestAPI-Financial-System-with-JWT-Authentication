import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
  HttpStatus,
} from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDTO } from './dto/create-subscription.dto';
import { UpdateSubscriptionDTO } from './dto/update-subscription.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetSubscriptionDTO } from './dto/get-subscription.dto';

@ApiTags('Subscriptions')
@Controller('subscriptions')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @ApiBody({ type: CreateSubscriptionDTO })
  @ApiOperation({ summary: 'Create subscription' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The subscription has been created successfully.',
    type: CreateSubscriptionDTO,
  })
  @Post()
  async create(@Body() data: CreateSubscriptionDTO) {
    return this.subscriptionService.create(data);
  }

  @ApiOperation({ summary: 'List all subscriptions' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subscription list has been returned successfully.',
    type: [GetSubscriptionDTO],
  })
  @Get()
  async findAll() {
    return this.subscriptionService.findAll();
  }

  @ApiOperation({ summary: 'List specified subscription' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subscription has been returned successfully.',
    type: GetSubscriptionDTO,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.subscriptionService.findOne(id);
  }

  @ApiOperation({ summary: 'Update subscriptions info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subscription info has been updated successfully.',
    type: UpdateSubscriptionDTO,
  })
  @Patch(':id')
  async update(@Body() data: UpdateSubscriptionDTO, @Param('id') id: string) {
    return this.subscriptionService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete specified subscription' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The subscription has been deleted.',
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.subscriptionService.delete(id);
  }
}

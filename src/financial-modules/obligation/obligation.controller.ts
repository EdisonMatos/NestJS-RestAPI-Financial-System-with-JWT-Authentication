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
import { ObligationService } from './obligation.service';
import { CreateObligationDTO } from './dto/create-obligation.dto';
import { UpdateObligationDTO } from './dto/update-obligation.dto';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetObligationDTO } from './dto/get-obligation.dto';

@ApiTags('Obligations')
@Controller('obligations')
export class ObligationController {
  constructor(private readonly obligationService: ObligationService) {}

  @ApiBody({ type: CreateObligationDTO })
  @ApiOperation({ summary: 'Create obligation' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The obligation has been created successfully',
    type: CreateObligationDTO,
  })
  @Post()
  async create(@Body() data: CreateObligationDTO) {
    return this.obligationService.create(data);
  }

  @ApiOperation({ summary: 'List all obligations' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The obligation list has been returned successfully.',
    type: [GetObligationDTO],
  })
  @Get()
  async findAll() {
    return this.obligationService.findAll();
  }

  @ApiOperation({ summary: 'List specified obligation' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The obligation has been returned successfully.',
    type: GetObligationDTO,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.obligationService.findOne(id);
  }

  @ApiOperation({ summary: 'Update obligation info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The obligation info has been updated successfully.',
    type: UpdateObligationDTO,
  })
  @Patch(':id')
  async update(@Body() data: UpdateObligationDTO, @Param('id') id: string) {
    return this.obligationService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete specified obligation' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The obligation has been deleted.',
  })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.obligationService.delete(id);
  }
}

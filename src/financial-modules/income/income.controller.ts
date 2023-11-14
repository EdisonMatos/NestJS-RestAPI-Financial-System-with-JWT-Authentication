import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IncomeService } from './income.service';
import { CreateIncomeDTO } from './dto/create-income.dto';
import { UpdateIncomeDTO } from './dto/update-income.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetIncomeDTO } from './dto/get-income.dto';

@ApiTags('Incomes')
@Controller('incomes')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @ApiBody({ type: CreateIncomeDTO })
  @ApiOperation({ summary: 'Create income' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The income has been created successfully',
    type: CreateIncomeDTO,
  })
  @Post()
  async create(@Body() data: CreateIncomeDTO) {
    return this.incomeService.create(data);
  }

  @ApiOperation({ summary: 'List all incomes' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The incomes list has been returned successfully.',
    type: [GetIncomeDTO],
  })
  @Get()
  async findAll() {
    return this.incomeService.findAll();
  }

  @ApiOperation({ summary: 'List specified income' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The income has been returned successfully.',
    type: GetIncomeDTO,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.incomeService.findOne(id);
  }

  @ApiOperation({ summary: 'Update income info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The income info has been updated successfully.',
    type: UpdateIncomeDTO,
  })
  @Patch(':id')
  async update(@Body() data: UpdateIncomeDTO, @Param('id') id: string) {
    return this.incomeService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete specified income' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The income has been deleted.',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.incomeService.delete(id);
  }
}

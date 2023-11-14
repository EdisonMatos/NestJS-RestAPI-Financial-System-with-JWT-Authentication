import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpStatus,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { UpdateCustomersDto } from './dto/update-customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetCustomerDto } from './dto/get-customer.dto';
import { AuthGuard } from '../../application-modules/guards/auth.guard';

// import { Roles } from '../../application-modules/decorators/roles.decorator';
// import { Role } from '@prisma/client';
// import { RoleGuard } from '../../application-modules/guards/role.guard';

// @Roles(Role.Customer)
// @UseGuards(AuthGuard, RoleGuard)

// @UseGuards(AuthGuard)

@ApiTags('Customers')
@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiBody({ type: CreateCustomerDto })
  @ApiOperation({ summary: 'Create customer' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The customer has been created successfully.',
    type: CreateCustomerDto,
  })
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    const createdCustomer = this.customerService.create(createCustomerDto);
    return createdCustomer;
    // return { createdCustomer: { ...createCustomerDto, password: undefined } };
  }

  @ApiOperation({ summary: 'List all customers' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The customer list has been returned successfully.',
    type: [GetCustomerDto],
  })
  @Get()
  findAll(): Promise<GetCustomerDto[]> {
    return this.customerService.findAll();
  }

  @ApiOperation({ summary: 'List specified customer' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The customer has been returned successfully.',
    type: GetCustomerDto,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(id);
  }

  @ApiOperation({ summary: 'Update customers info' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The customer info has been updated successfully.',
    type: UpdateCustomersDto,
  })
  @Patch(':id')
  async update(@Body() data: UpdateCustomersDto, @Param('id') id: string) {
    return this.customerService.update(id, data);
  }

  @ApiOperation({ summary: 'Delete specified customer' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The customer has been deleted.',
  })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customerService.delete(id);
  }
}

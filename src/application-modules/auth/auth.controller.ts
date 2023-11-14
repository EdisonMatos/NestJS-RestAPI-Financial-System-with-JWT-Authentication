import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth.login.dto';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { AuthForgetDTO } from './dto/auth.forget.dto';
import { AuthResetDTO } from './dto/auth.reset.dto';
import { CustomerService } from '../../users-modules/customer/customer.service';
import { AuthService } from './auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { Customer } from '../decorators/customer.decorator';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: 'Login customer' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The customer has been logged successfully.',
    type: AuthLoginDTO,
  })
  @Post('login')
  async login(@Body() { email, password }: AuthLoginDTO) {
    return this.authService.login(email, password);
  }

  @ApiOperation({ summary: 'Register customer' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The customer has been registered successfully.',
    type: AuthRegisterDTO,
  })
  @Post('register')
  async register(@Body() body: AuthRegisterDTO) {
    return this.authService.register(body);
  }

  @ApiOperation({ summary: 'Forget password' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The password recovery link was sent to the registered email.',
    type: AuthForgetDTO,
  })
  @Post('forget')
  async forget(@Body() { email }: AuthForgetDTO) {
    return this.authService.forget(email);
  }

  @ApiOperation({ summary: 'Change password' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The customer password has been changed successfully.',
    type: AuthResetDTO,
  })
  @Post('reset')
  async reset(@Body() { password, token }: AuthResetDTO) {
    return this.authService.reset(password, token);
  }

  @ApiOperation({ summary: 'Admin route to check access rights' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The permisions was showed successfully.',
  })
  @UseGuards(AuthGuard)
  @Post('myself')
  async me(@Customer() customer) {
    return { customer };
  }
}

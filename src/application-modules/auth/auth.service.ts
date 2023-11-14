import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Customer } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { AuthRegisterDTO } from './dto/auth.register.dto';
import { CustomerService } from '../../users-modules/customer/customer.service';

@Injectable()
export class AuthService {
  private issuer: 'login';
  private audience: 'customers';

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly customerService: CustomerService,
  ) {}

  createToken(customer: Customer) {
    return {
      acessToken: this.jwtService.sign(
        {
          id: customer.id,
          name: customer.name,
          email: customer.email,
        },
        {
          expiresIn: '30 days',
          subject: String(customer.id),
          issuer: 'login',
          audience: 'customers',
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        audience: 'customers',
        issuer: 'login',
      });

      return data;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  isTokenValid(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (err) {
      return false;
    }
  }

  async login(email: string, password: string) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        email,
        password,
      },
    });

    if (!customer) {
      throw new UnauthorizedException('Email or password incorrect.');
    }

    return this.createToken(customer);
  }

  async forget(email: string) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        email,
      },
    });

    if (!customer) {
      throw new UnauthorizedException('Email incorrect.');
    }

    // To do: Send email

    return true;
  }
  async reset(password: string, token: string) {
    // To do: If token is valid, change password

    const id = '0';

    const customer = await this.prisma.customer.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });

    return this.createToken(customer);
  }

  async register(data: AuthRegisterDTO) {
    const customer = await this.customerService.create(data);
    return this.createToken(customer);
  }
}

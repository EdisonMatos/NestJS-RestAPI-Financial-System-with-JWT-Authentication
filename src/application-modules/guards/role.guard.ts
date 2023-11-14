import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '@prisma/client';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const { customer } = context.switchToHttp().getRequest();

    const rolesFiltered = requiredRoles.filter(
      (role) => role === customer.role,
    );

    console.log(
      'Requester:',
      customer.name,
      ', Role:',
      customer.role,
      '| Role required for this action:',
      requiredRoles,
    );

    return rolesFiltered.length > 0;
  }
}

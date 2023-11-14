import {
  createParamDecorator,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';

export const Customer = createParamDecorator(
  (filter: string, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (request.customer) {
      if (filter) {
        return request.customer[filter];
      } else {
        return request.customer;
      }
    } else {
      throw new NotFoundException(
        'Customer not found on request. Use AuthGuard to get the customer.',
      );
    }
  },
);

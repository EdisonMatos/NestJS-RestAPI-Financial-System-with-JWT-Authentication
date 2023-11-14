import { PartialType } from '@nestjs/mapped-types';
import { CreateObligationDTO } from './create-obligation.dto';

export class UpdateObligationDTO extends PartialType(CreateObligationDTO) {}

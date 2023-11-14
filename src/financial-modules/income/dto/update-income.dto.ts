import { PartialType } from '@nestjs/mapped-types';
import { CreateIncomeDTO } from './create-income.dto';

export class UpdateIncomeDTO extends PartialType(CreateIncomeDTO) {}

import { PersonDTO } from './persons.dto';
import { PartialType } from '@nestjs/mapped-types';

export class EditPersonDTO extends PartialType(PersonDTO) {}

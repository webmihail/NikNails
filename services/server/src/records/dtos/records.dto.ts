import { PersonDTO } from 'src/persons/dtos';

export interface SimpleRecordDto {
  id?: number;
  time: Date;
  type: string;
  status: string;
}

export interface RecordDTO extends SimpleRecordDto {
  personId: number;
}

export interface FormatRecords extends SimpleRecordDto {
  person: PersonDTO;
}

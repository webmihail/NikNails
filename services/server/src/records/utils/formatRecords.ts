import { FormatRecordsDTO, RecordDTO } from '../dtos';

export const formatRecords = (records: RecordDTO[]): FormatRecordsDTO[] => {
  return records.map((record: RecordDTO) => {
    return {
      id: record.id,
      time: record.date,
      type: record.type,
      status: record.status,
      person: {
        id: record.person.id,
        firstName: record.person.firstName,
        lastName: record.person.lastName,
        phoneNumber: record.person.phoneNumber,
      },
    };
  });
};

import { Record } from '../entity/record.entity';

export const formatRecords = (records: Record[]) => {
  return records.map((record: Record) => {
    return {
      id: record.id,
      time: record.date,
      type: record.type,
      status: record.status,
      person: {
        id: record.person.id,
        firstName: record.person.firstName,
        lastName: record.person.lastName,
        phoneNumber: record.person.phoneNumber
      }
    }
  })
}
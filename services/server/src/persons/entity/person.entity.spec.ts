import { Person } from './person.entity';

describe('Person', () => {
  it('should be defined', () => {
    expect(new Person()).toBeDefined();
  });
});
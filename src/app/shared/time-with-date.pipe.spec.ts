import { TimeWithDatePipe } from './time-with-date.pipe';

describe('TimeWithDatePipe', () => {
  it('create an instance', () => {
    const pipe = new TimeWithDatePipe();
    expect(pipe).toBeTruthy();
  });
});

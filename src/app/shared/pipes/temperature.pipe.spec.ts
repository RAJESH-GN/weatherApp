import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it('should show temperature in degree celcius', () => {
    const pipe = new TemperaturePipe();
    expect(pipe.transform(6)).toEqual('6°C');
  });
});

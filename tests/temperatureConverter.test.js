const TemperatureConverter = require('../src/temperatureConverter');

describe('TemperatureConverter', () => {
  describe('celsiusToFahrenheit', () => {
    test('converts 0°C to 32°F', () => {
      expect(TemperatureConverter.celsiusToFahrenheit(0)).toBeCloseTo(32);
    });

    test('converts 100°C to 212°F', () => {
      expect(TemperatureConverter.celsiusToFahrenheit(100)).toBeCloseTo(212);
    });

    test('converts -40°C to -40°F', () => {
      expect(TemperatureConverter.celsiusToFahrenheit(-40)).toBeCloseTo(-40);
    });

    test('converts 25°C to 77°F', () => {
      expect(TemperatureConverter.celsiusToFahrenheit(25)).toBeCloseTo(77);
    });

    test('throws TypeError for non-numeric input', () => {
      expect(() => TemperatureConverter.celsiusToFahrenheit('invalid')).toThrow(TypeError);
      expect(() => TemperatureConverter.celsiusToFahrenheit(null)).toThrow(TypeError);
      expect(() => TemperatureConverter.celsiusToFahrenheit(undefined)).toThrow(TypeError);
      expect(() => TemperatureConverter.celsiusToFahrenheit(NaN)).toThrow(TypeError);
    });
  });

  describe('fahrenheitToCelsius', () => {
    test('converts 32°F to 0°C', () => {
      expect(TemperatureConverter.fahrenheitToCelsius(32)).toBeCloseTo(0);
    });

    test('converts 212°F to 100°C', () => {
      expect(TemperatureConverter.fahrenheitToCelsius(212)).toBeCloseTo(100);
    });

    test('converts -40°F to -40°C', () => {
      expect(TemperatureConverter.fahrenheitToCelsius(-40)).toBeCloseTo(-40);
    });

    test('converts 77°F to 25°C', () => {
      expect(TemperatureConverter.fahrenheitToCelsius(77)).toBeCloseTo(25);
    });

    test('throws TypeError for non-numeric input', () => {
      expect(() => TemperatureConverter.fahrenheitToCelsius('invalid')).toThrow(TypeError);
      expect(() => TemperatureConverter.fahrenheitToCelsius(null)).toThrow(TypeError);
      expect(() => TemperatureConverter.fahrenheitToCelsius(undefined)).toThrow(TypeError);
      expect(() => TemperatureConverter.fahrenheitToCelsius(NaN)).toThrow(TypeError);
    });
  });
});
/**
 * A class to convert between Celsius and Fahrenheit
 */
class TemperatureConverter {
    /**
     * Convert Celsius to Fahrenheit
     * @param {number} celsius - Temperature in Celsius
     * @returns {number} Temperature in Fahrenheit
     * @throws {TypeError} If input is not a number
     */
    static celsiusToFahrenheit(celsius) {
      if (typeof celsius !== 'number' || isNaN(celsius)) {
        throw new TypeError('Temperature must be a number');
      }
      return (celsius * 9/5) + 32;
    }
  
    /**
     * Convert Fahrenheit to Celsius
     * @param {number} fahrenheit - Temperature in Fahrenheit
     * @returns {number} Temperature in Celsius
     * @throws {TypeError} If input is not a number
     */
    static fahrenheitToCelsius(fahrenheit) {
      if (typeof fahrenheit !== 'number' || isNaN(fahrenheit)) {
        throw new TypeError('Temperature must be a number');
      }
      return (fahrenheit - 32) * 5/9;
    }
  }
  
  module.exports = TemperatureConverter;
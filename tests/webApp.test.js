const request = require('supertest');
const app = require('../webApp');

describe('Web Application', () => {
  test('GET / should return the HTML page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Temperature Converter');
    expect(response.text).toContain('<title>Temperature Converter</title>');
  });

  describe('POST /convert', () => {
    test('should convert Celsius to Fahrenheit correctly', async () => {
      const response = await request(app)
        .post('/convert')
        .send({
          temperature: '25',
          conversionType: 'c_to_f'
        });
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        result: '77.00',
        unit: '°F'
      });
    });

    test('should convert Fahrenheit to Celsius correctly', async () => {
      const response = await request(app)
        .post('/convert')
        .send({
          temperature: '77',
          conversionType: 'f_to_c'
        });
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        result: '25.00',
        unit: '°C'
      });
    });

    test('should return error for invalid temperature', async () => {
      const response = await request(app)
        .post('/convert')
        .send({
          temperature: 'invalid',
          conversionType: 'c_to_f'
        });
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    test('should return error for invalid conversion type', async () => {
      const response = await request(app)
        .post('/convert')
        .send({
          temperature: '25',
          conversionType: 'invalid'
        });
      
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });
});
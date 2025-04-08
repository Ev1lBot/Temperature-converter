const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const TemperatureConverter = require('./temperatureConverter');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/convert', (req, res) => {
  try {
    const { temperature, conversionType } = req.body;
    const tempValue = parseFloat(temperature);
    
    if (isNaN(tempValue)) {
      return res.status(400).json({ error: 'Temperature must be a number' });
    }
    
    let result;
    if (conversionType === 'c_to_f') {
      result = TemperatureConverter.celsiusToFahrenheit(tempValue);
      return res.json({ result: result.toFixed(2), unit: '°F' });
    } else if (conversionType === 'f_to_c') {
      result = TemperatureConverter.fahrenheitToCelsius(tempValue);
      return res.json({ result: result.toFixed(2), unit: '°C' });
    } else {
      return res.status(400).json({ error: 'Invalid conversion type' });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing purposes
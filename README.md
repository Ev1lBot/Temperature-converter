# Temperature Converter

A simple Node.js application that converts temperatures between Celsius and Fahrenheit.

## Features

- Convert Celsius to Fahrenheit
- Convert Fahrenheit to Celsius
- Command-line interface
- Web interface
- Input validation
- Comprehensive unit tests

## Project Structure

```
temperature-converter/
├── temperatureConverter.js       # Core conversion logic
├── temperatureConverter.test.js  # Unit tests for core logic
├── cli.js                        # Command-line interface
├── webApp.js                     # Web server
├── public/                       # Static web files
│   └── index.html                # Web interface
├── webApp.test.js                # Tests for web application
├── package.json                  # Project configuration
├── .gitignore                    # Git ignore file
└── README.md                     # Project documentation
```

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Usage

### Command-line Interface

Run the CLI:

```bash
npm start
# or
node cli.js
```

### Web Interface

Start the web server:

```bash
node webApp.js
```

Then open your browser and navigate to http://localhost:3000

### As a Module

```javascript
const TemperatureConverter = require('./temperatureConverter');

// Convert Celsius to Fahrenheit
const fahrenheit = TemperatureConverter.celsiusToFahrenheit(25);
console.log(`25°C is equal to ${fahrenheit.toFixed(2)}°F`);

// Convert Fahrenheit to Celsius
const celsius = TemperatureConverter.fahrenheitToCelsius(77);
console.log(`77°F is equal to ${celsius.toFixed(2)}°C`);
```

## Running Tests

```bash
npm test
```

## License

MIT
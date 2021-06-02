

const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;

const FahrenheitTocelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;

console.log(`Fahrenheit: ${celsiusToFahrenheit(15)}`); //Resultado 59

console.log(`Celsius: ${FahrenheitTocelsius(59)}`); //Resultado 15
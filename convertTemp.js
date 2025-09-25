// Function to convert Celsius to Kelvin and Fahrenheit

// // Example usage:
// let celsius = 25;
// let [kelvin, fahrenheit] = convertTemperature(celsius);
// console.log(`Celsius: ${celsius}, Kelvin: ${kelvin}, Fahrenheit: ${fahrenheit}`);

function convertTemp(celsius) {
    // Input validation
    if (typeof celsius !== 'number' || isNaN(celsius)){
        throw new Error ('Input must be a valid number');
    }
        
    let kelvin = celsius  + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;
    return {k: kelvin, f: fahrenheit};
}

// Example usage:
let result = convertTemp(25);
console.log(`Kelvin: ${result.k}, Fahrenheit: ${result.f}`);
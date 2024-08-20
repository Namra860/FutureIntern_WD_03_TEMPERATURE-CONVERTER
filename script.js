document.getElementById('convert-btn').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperature').value;
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const errorMessage = document.getElementById('error-message');
    const resultElement = document.getElementById('result');

    // Clear previous error message and result
    errorMessage.textContent = '';
    resultElement.textContent = '';

    // Validate input
    if (isNaN(temperatureInput) || temperatureInput.trim() === '') {
        errorMessage.textContent = 'Please enter a valid number.';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let resultText;

    if (selectedUnit === 'celsius') {
        const toFahrenheit = (temperature * 9/5) + 32;
        const toKelvin = temperature + 273.15;
        resultText = `${temperature} °C = ${toFahrenheit.toFixed(2)} °F = ${toKelvin.toFixed(2)} K`;
    } else if (selectedUnit === 'fahrenheit') {
        const toCelsius = (temperature - 32) * 5/9;
        const toKelvin = (temperature - 32) * 5/9 + 273.15;
        resultText = `${temperature} °F = ${toCelsius.toFixed(2)} °C = ${toKelvin.toFixed(2)} K`;
    } else if (selectedUnit === 'kelvin') {
        const toCelsius = temperature - 273.15;
        const toFahrenheit = (temperature - 273.15) * 9/5 + 32;
        resultText = `${temperature} K = ${toCelsius.toFixed(2)} °C = ${toFahrenheit.toFixed(2)} °F`;
    }

    resultElement.textContent = resultText;
});

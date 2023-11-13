git function convertTemperature() {

    let celsius = parseFloat(document.getElementById('celsiusInput').value) || 0;
    let fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value) || 0;
    let kelvin = parseFloat(document.getElementById('kelvinInput').value) || 0;

    document.getElementById('fahrenheitInput').value = (celsius * 9/5) + 32;
    document.getElementById('kelvinInput').value = celsius + 273.15;

    document.getElementById('celsiusInput').value = (fahrenheit - 32) * 5/9;
    document.getElementById('kelvinInput').value = (fahrenheit - 32) * 5/9 + 273.15;

    document.getElementById('celsiusInput').value = kelvin - 273.15;
    document.getElementById('fahrenheitInput').value = (kelvin - 273.15) * 9/5 + 32;
}

function clearInputs() {
    document.getElementById('celsiusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('kelvinInput').value = '';
}
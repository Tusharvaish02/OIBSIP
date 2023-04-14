document.getElementById('tempConverter').addEventListener('submit', function(event) {
    event.preventDefault();

    let fahrenheit = document.getElementById('fahrenheitInput').value;
    let celsius = document.getElementById('celsiusInput').value;

    if (fahrenheit !== '') {
        celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsiusInput').value = celsius.toFixed(2);
    } else if (celsius !== '') {
        fahrenheit = celsius * 9/5 + 32;
        document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
    }

    document.getElementById('result').innerText = `Converted Temperature: ${celsius}°C / ${fahrenheit}°F`;
    document.getElementById('resultContainer').style.display = 'block';
});

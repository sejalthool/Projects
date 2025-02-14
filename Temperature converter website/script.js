const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');
const kelvin = document.getElementById('kelvin');

// Celsius conversions
celsius.addEventListener('input', function() {
    const c = parseFloat(celsius.value);
    if (!isNaN(c)) {
        fahrenheit.value = ((c * 9/5) + 32).toFixed(2);
        kelvin.value = (c + 273.15).toFixed(2);
    } else {
        fahrenheit.value = '';
        kelvin.value = '';
    }
});

// Fahrenheit conversions
fahrenheit.addEventListener('input', function() {
    const f = parseFloat(fahrenheit.value);
    if (!isNaN(f)) {
        celsius.value = ((f - 32) * 5/9).toFixed(2);
        kelvin.value = ((f - 32) * 5/9 + 273.15).toFixed(2);
    } else {
        celsius.value = '';
        kelvin.value = '';
    }
});

// Kelvin conversions
kelvin.addEventListener('input', function() {
    const k = parseFloat(kelvin.value);
    if (!isNaN(k)) {
        celsius.value = (k - 273.15).toFixed(2);
        fahrenheit.value = ((k - 273.15) * 9/5 + 32).toFixed(2);
    } else {
        celsius.value = '';
        fahrenheit.value = '';
    }
});

// Clear all inputs
function clearAll() {
    celsius.value = '';
    fahrenheit.value = '';
    kelvin.value = '';
} 
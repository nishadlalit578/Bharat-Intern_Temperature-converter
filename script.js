document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");

    function updateTemperatures() {
        const celsiusValue = parseFloat(celsiusInput.value) || 0;
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        const kelvinValue = celsiusValue + 273.15;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    }

    celsiusInput.addEventListener("input", updateTemperatures);
    fahrenheitInput.addEventListener("input", function () {
        const fahrenheitValue = parseFloat(fahrenheitInput.value) || 0;
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        const kelvinValue = celsiusValue + 273.15;

        celsiusInput.value = celsiusValue.toFixed(2);
        kelvinInput.value = kelvinValue.toFixed(2);
    });
    kelvinInput.addEventListener("input", function () {
        const kelvinValue = parseFloat(kelvinInput.value) || 0;
        const celsiusValue = kelvinValue - 273.15;
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        celsiusInput.value = celsiusValue.toFixed(2);
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    });
});

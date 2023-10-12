function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    let result = "";

    if (selectedUnit === "celsius") {

        result = `
            ${temperatureInput} °C is equal to ${(temperatureInput * 9/5) + 32} °F and ${(temperatureInput + 273.15)} K.
            `;

    } else if (selectedUnit === "fahrenheit") {
        result = `
            ${temperatureInput} °F is equal to ${(temperatureInput - 32) * 5/9} °C and ${(temperatureInput - 32) * 5/9 + 273.15} K.
            `;

    } else if (selectedUnit === "kelvin") {
        result = `
            ${temperatureInput} K is equal to ${(temperatureInput - 273.15)} °C and ${((temperatureInput - 273.15) * 9/5) + 32} °F.
            `;
    }

    document.getElementById("result").textContent = result;
}
const celsiusEl = document.querySelector('.celsius'),
  fahrenheitEl = document.querySelector('.fahrenheit'),
  kelvinEl = document.querySelector('.kelvin');

function handleInputChange(e) {
  const currentValue = +e.target.value;
  switch (e.target.id) {
    case 'celcius':
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case 'fahrenheit':
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case 'kelvin':
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
  }
}

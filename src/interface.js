$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.increaseTemperature(); // update model
    updateTemperature();
  })

  $('#temperature-down').click(function() { // event listener
    thermostat.decreaseTemperature(); // update model
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c49855571159f819f404955a8b1a8080&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
})

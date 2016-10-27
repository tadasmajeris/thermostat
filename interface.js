$(document).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.getEnergyUsage())
  }
  updateTemperature();
  updateWeather('Manchester');

  $('#temperature-up').click(function() {
    thermostat.increaseTemperature(1);
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-toggle').click(function() {
    thermostat.togglePSM();
    var status = thermostat.isPowerSaverOn() ? 'on' : 'off';
    var buttonStatus = status === 'on' ? 'off' : 'on';
    $('#power-saving-status').text(status);
    $('#powersaving-toggle').html('PSM ' + buttonStatus);
    updateTemperature();
  });

  function updateWeather(city_name) {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city_name + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#city_name').text(city_name);
      $('#outside-temperature').text(Math.round(data.main.temp));
    });
  }

  $('#city').change(function() {
    updateWeather($('#city').val());
  });
})

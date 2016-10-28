$(document).ready(function() {
  var thermostat;

  $.getJSON('http://localhost:4567/settings', function(data){
    thermostat = new Thermostat(data.temperature);
    updateTemperature();
  });

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
    $('#power-saving-status').text('ON')
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text('OFF')
    updateTemperature();
  })

  $('#submit-city').click(function(event) {
    var city = $('#current-city').val();
    displayWeather(city);
  })

  $('#save-settings').click(function() {
    var temp = thermostat.getCurrentTemperature();
    var status = thermostat.isPowerSavingModeOn();
    var city = $('#current-city').val();
    $.ajax({
      type: 'post',
      url: 'http://localhost:4567/settings',
      data: {
        'city': city,
        'power_saving_mode': status,
        'temperature': temp
      }
    })
  });

  function displayWeather(city){
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=c49855571159f819f404955a8b1a8080';
    var units = '&units=metric';
    $.get(url + token + units, function(data){
      $('#current-temperature').text(data.main.temp);
    })
  }

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  }
})

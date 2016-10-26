$(document).ready(function() {
  var thermostat = new Thermostat();
  var update = function() {
    $("#temperature_display").val(thermostat.temperature());
    $("#temperature_display").css("background-color", thermostat.screenColour());
  };

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&mode=json&units=metric&appid=0afaa8d09217753695c1ffd42e3b429b', function(data) {
    londonTemperature = Math.floor(data.main.temp);
    $('#temperatureOutside').html("Temperature outside: " + londonTemperature + '°C');
  })

  update();

  $( "#up_button" ).click(function(){
    thermostat.increaseTemperature();
    update();
  });

  $( "#down_button" ).click(function(){
    thermostat.decreaseTemperature();
    update();
  });

  $( "#reset_button" ).click(function(){
    thermostat.resetTemperature();
    update();
  });

  $( "#psm_toggle_button" ).click(function(){
    thermostat.togglePowerSaving();
    var status = ( thermostat.powerSaving() ? "on" : "off" );
    $( "#powerSaving" ).html( "PowerSaving is " + status );
    var notStatus = status === "on" ? "off" : "on";
    $( "#psm_toggle_button" ).html( "Turn PowerSaving " + notStatus );
    update();
  });
});

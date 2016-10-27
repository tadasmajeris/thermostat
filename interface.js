$(document).ready(function() {

  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.getEnergyUsage())
  }
  updateTemperature();


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

})

'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with the up button', function() {
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with the down button', function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function(){
    for (var i = 0; i < 11; i++){
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('can turn power saving mode off', function(){
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false)
  });

  it('can switch PSM back on', function (){
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function(){
    it('has a maximum temperature of 25 degrees', function(){
      for (var i = 0; i < 6; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.turnPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.increaseTemperature();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

});

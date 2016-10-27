'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start with 20 degrees by default', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('allows you to increase the temperature using the up button', function(){
    thermostat.increaseTemperature(1);
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE+1);
  });

  it('allows you to decrease the temperature using the down button', function(){
    thermostat.decreaseTemperature(5);
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE-5);
  });

  it('stops decreasing temperature when reached minimum', function() {
    var temp = thermostat.DEFAULT_TEMPERATURE = thermostat.MINIMUM_TEMPERATURE
    thermostat.decreaseTemperature(temp+5);
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });

  it('power saver mode is on by default', function() {
    expect(thermostat.isPowerSaverOn()).toBe(true);
  });

  it('shuold have maximum temperature of 25 when power saver mode is on', function() {
    thermostat.increaseTemperature(6);
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.POWER_SAVER_MAX_TEMPERATURE);
  });

  it('should turn power saver mode off', function() {
    thermostat.switchOff();
    expect(thermostat.isPowerSaverOn()).toBe(false);
  });

  it('should turn power saver mode on', function() {
    thermostat.switchOff();
    thermostat.switchOn();
    expect(thermostat.isPowerSaverOn()).toBe(true);
  });

  it('should reset temperature to power saving max if it was higher', function() {
    thermostat.switchOff();
    thermostat.increaseTemperature(10);
    thermostat.switchOn();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.POWER_SAVER_MAX_TEMPERATURE);
  });

  it('can be reset to the default temperature',function() {
    thermostat.increaseTemperature(5);
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });

  it('is low-usage when below 18 degrees',function() {
    thermostat.decreaseTemperature(5);
    expect(thermostat.getEnergyUsage()).toEqual('low-usage');
  });

  it('is high-usage when above 25 degrees',function() {
    thermostat.switchOff();
    thermostat.increaseTemperature(6);
    expect(thermostat.getEnergyUsage()).toEqual('high-usage');
  });

  it('is medium-usage when between 18 and 25 degrees',function() {
    expect(thermostat.getEnergyUsage()).toEqual('medium-usage');
  });

});

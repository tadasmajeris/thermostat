'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('should start with 20 degrees by default', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('allows you to increase the temperature using the up button', function(){
    thermostat.increaseTemperature(1);
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('allows you to decrease the temperature using the down button', function(){
    thermostat.decreaseTemperature(5);
    expect(thermostat.getCurrentTemperature()).toEqual(15);
  });

  it("has a minimum temperature", function(){
    expect(thermostat.MINIMUM_TEMPERATURE).toEqual(10);
  });

  it('stops decreasing temperature beyond 10 degrees', function() {
    thermostat.decreaseTemperature(11);
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('power saver mode is on by default', function() {
    expect(thermostat.isPowerSaverOn()).toBe(true);
  });

  it('shuold have maximum temperature of 25 when power saver mode is on', function() {
    thermostat.increaseTemperature(6);
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it('should turn power saver mode off', function() {
    thermostat.switchOff();
    expect(thermostat.isPowerSaverOn()).toBe(false);
  });

  it('should turn power saver mode on', function() {
    thermostat.switchOff();
    expect(thermostat.isPowerSaverOn()).toBe(false);
    thermostat.switchOn();
    expect(thermostat.isPowerSaverOn()).toBe(true);
  });

  it('can be reset to the default temperature',function() {
    thermostat.increaseTemperature(5);
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
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

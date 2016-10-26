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

  it("won't allow you to decrease the temperature below 10 degrees", function() {
    expect(function(){ thermostat.decreaseTemperature(50); }).toThrowError("Minimum temperature is 10 degrees. Are you crazy?");
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


});

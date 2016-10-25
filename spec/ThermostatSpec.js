"use strict";

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has default value of 20', function(){
    expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE);
  });

  describe('increaseTemperature', function(){
    it('should increase the temperature by 1 when called once', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE+1);
    });
    it('should increase the temperature by 7 when called 7 times', function(){
      for(var i=1; i<=7; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE+7);
    });
  });

  describe('decreaseTemperature', function(){
    it('should decrease the temperature by 1 when called once', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE-1);
    });
    it('should decrease the temperature by 5 when called 5 times', function(){
      for(var i=1; i<=5; i++){
        thermostat.decreaseTemperature();
      };
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE-5);
    });
    it('should raise an error, temperature cannot go below MINIMUM TEMP', function(){
      var x = thermostat._DEFAULT_TEMPERATURE - thermostat._MINIMUM_TEMPERATURE;
      for(var i=1; i<=x ; i++){
        thermostat.decreaseTemperature();
      };
      expect(function(){thermostat.decreaseTemperature(); }).toThrowError('Minimum Temperature reached');
    });
  });
});

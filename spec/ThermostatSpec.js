'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts with temperature at 20', function(){
    expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP);
  });

  describe('increaseTemperature', function(){
    it('should increase the temperature by 1, when called once', function(){
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP+1);
    });

    it('should increase the temperature by 4, when called four times', function(){
      for(var i=1; i<=4; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP+4);
    });
  });

  describe('decreaseTemperature', function(){
    it('should decrease the temperature by 1', function(){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP-1);
    });

    it('should decrease the temperature by 5, when called five times', function(){
      for(var i=1; i<=5; i++){
        thermostat.decreaseTemperature();
      };
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP-5);
    });
  });
});

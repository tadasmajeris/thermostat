'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with temperature at 20', function() {
    expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP);
  });

  describe('increaseTemperature', function() {
    it('should increase the temperature by 1, when called once', function() {
      thermostat.increaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP+1);
    });

    it('should increase the temperature by 4, when called four times', function() {
      for(var i=1; i<=4; i++){
        thermostat.increaseTemperature();
      };
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP+4);
    });

    describe('powerSaving turned on', function() {
      it('should start in powerSaving mode by default', function() {
        expect(thermostat.powerSaving()).toBe(true);
      });
      it('can switch on powerSaving', function() {
        thermostat.switchOffPowerSaving();
        thermostat.switchOnPowerSaving();
        expect(thermostat.powerSaving()).toBe(true);
      });
      it('should not increase temeprature past power saving max', function(){
        var tempDifference = thermostat._POWER_SAVING_MAX - thermostat._DEFAULT_TEMP
        for(var i=0; i<=tempDifference; i++){
          thermostat.increaseTemperature();
        };
        expect(thermostat.temperature()).toEqual(thermostat._POWER_SAVING_MAX);
      });
    });

    describe('powerSaving turned off', function() {
      it('should start in powerSaving mode by default', function() {
        thermostat.switchOffPowerSaving();
        expect(thermostat.powerSaving()).toBe(false);
      });
      it('should not increase temeprature past max', function(){
        var tempDifference = thermostat._MAX - thermostat._DEFAULT_TEMP
        thermostat.switchOffPowerSaving();
        for(var i=0; i<=tempDifference; i++){
          thermostat.increaseTemperature();
        };
        expect(thermostat.temperature()).toEqual(thermostat._MAX);
      });
    });
  });

  describe('decreaseTemperature', function() {
    it('should decrease the temperature by 1', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP-1);
    });

    it('should decrease the temperature by 5, when called five times', function() {
      for(var i=1; i<=5; i++){
        thermostat.decreaseTemperature();
      };
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP-5);
    });

    it('should not decrease temperature below 10', function () {
      var tempDifference = thermostat._DEFAULT_TEMP - thermostat._MIN_TEMP;
      for(var i=0; i<=tempDifference; i++){
        thermostat.decreaseTemperature();
      };
      expect(thermostat.temperature()).toEqual(thermostat._MIN_TEMP);
    });
  });

  describe('resetTemperature', function() {
    it('should reset temperature to default', function() {
      thermostat.resetTemperature();
      expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMP);
    });
  });

  describe('screenColour', function() {
    it('should return "green" when temperature is less than 18', function() {
      spyOn(thermostat, 'temperature').and.returnValue(17);
      expect(thermostat.screenColour()).toBe('lightgreen');
    });
    it('should return "yellow" when temperature is between 18 and 24', function() {
      spyOn(thermostat, 'temperature').and.returnValue(24);
      expect(thermostat.screenColour()).toBe('gold');
    });
    it('should return "red" when temperature is over 24', function() {
      spyOn(thermostat, 'temperature').and.returnValue(25);
      expect(thermostat.screenColour()).toBe('salmon');
    });
  });
});

'use strict';

function Thermostat(){
  this._DEFAULT_TEMP = 20;
  this._temperature = this._DEFAULT_TEMP;
};

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  this._temperature++
};

Thermostat.prototype.decreaseTemperature = function() {
  this._temperature--
};

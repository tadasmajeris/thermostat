"use strict";

function Thermostat(){
  this._DEFAULT_TEMPERATURE = 20;
  this._MINIMUM_TEMPERATURE = 10;
  this._temperature = this._DEFAULT_TEMPERATURE;
};

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.increaseTemperature = function () {
  this._temperature++;
};

Thermostat.prototype.decreaseTemperature = function () {
  if(this._temperature === this._MINIMUM_TEMPERATURE) {
    throw new Error('Minimum Temperature reached');
  }
  this._temperature--;
};

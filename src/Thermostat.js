"use strict";

function Thermostat(){
  this._DEFAULT_TEMPERATURE = 20;
  this._temperature = this._DEFAULT_TEMPERATURE;
};

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

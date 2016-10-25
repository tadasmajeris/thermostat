function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.MINIMUM_TEMPERATURE = 10;

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function(amount) {
  this.temperature += amount;
};

Thermostat.prototype.decreaseTemperature = function(amount) {
  if(amount > (this.temperature - this.MINIMUM_TEMPERATURE)) {
    throw new Error('Minimum temperature is 10 degrees. Are you crazy?');
  }
  this.temperature -= amount;

};

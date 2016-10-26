function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powersaver = true;
}

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

Thermostat.prototype.isPowerSaverOn = function() {
  return this.powersaver === true;
};

Thermostat.prototype.switchOff = function() {
  this.powersaver = false;
};

Thermostat.prototype.switchOn = function() {
  this.powersaver = true;
};

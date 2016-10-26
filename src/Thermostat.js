function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powersaver = true;
  this.POWER_SAVER_MAX_TEMPERATURE = 25;
  this.POWER_SAVER_OFF_MAX_TEMPERATURE = 32;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.getMaxTemperature = function() {
  if(this.isPowerSaverOn() === true) {
    return this.POWER_SAVER_MAX_TEMPERATURE;
  }
  else {
    return this.POWER_SAVER_OFF_MAX_TEMPERATURE;
  }
};

Thermostat.prototype.increaseTemperature = function(amount) {
  if(amount > (this.getMaxTemperature() - this.temperature)) {
    this.temperature = this.getMaxTemperature();
  }
  else {
    this.temperature += amount;
  }
};

Thermostat.prototype.decreaseTemperature = function(amount) {
  if(amount > (this.temperature - this.MINIMUM_TEMPERATURE)) {
    this.temperature = this.MINIMUM_TEMPERATURE;
  }
  else {
    this.temperature -= amount;
  }
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

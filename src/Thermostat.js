function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.powersaver = true;
  this.POWER_SAVER_MAX_TEMPERATURE = 25;
  this.POWER_SAVER_OFF_MAX_TEMPERATURE = 32;
  this.LOW_ENERGY_USAGE = 18;
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

Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.getEnergyUsage = function() {
  if (this.temperature  < this.LOW_ENERGY_USAGE) {
    return 'low-usage';
  }
  if (this.temperature >= this.LOW_ENERGY_USAGE && this.temperature <= this.POWER_SAVER_MAX_TEMPERATURE) {
    return 'medium-usage';
  }
  else {
    return 'high-usage';
  }
};

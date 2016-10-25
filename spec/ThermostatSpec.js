"use strict";

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has default value of 20', function(){
    expect(thermostat.temperature()).toEqual(20);
  });
});

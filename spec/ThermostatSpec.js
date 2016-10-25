describe('Thermostat', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });


  it('starts with temperature at 20', function(){
    expect(thermostat.desiredTemp).toBe(20)
  });
});

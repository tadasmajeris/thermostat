class Settings
  include DataMapper::Resource
  property :id, Serial
  property :city, String
  property :powersaving, Boolean
  property :temperature, Integer

end

DataMapper.setup(:default, "postgres://localhost/thermostat")
DataMapper.finalize
DataMapper.auto_upgrade!

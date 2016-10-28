require 'data_mapper'

class Settings

  include DataMapper::Resource

  property :id, Serial
  property :temperature, Integer
  property :city, String
  property :power_saving_mode, Boolean

end

DataMapper.setup(:default, 'postgres://localhost/thermostat')
DataMapper.finalize
DataMapper.auto_upgrade!

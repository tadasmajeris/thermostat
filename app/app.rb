require 'sinatra/base'
require 'data_mapper'
require_relative 'models/settings'



class Thermostat < Sinatra::Base


  get '/' do
    @settings = Settings.last
    if @settings.temperature < 18
      @usage = 'low-usage'
    elsif @settings.temperature <= 25
        @usage = 'medium-usage'
    else
      @usage = 'high-usage'
    end
    p @usage
    erb :'index'
  end

  post '/save' do
    Settings.create(city: params[:city], powersaving: params[:powersaving], temperature: params[:temperature])
  end

  run! if app_file == $0

end

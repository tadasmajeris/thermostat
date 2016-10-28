require 'sinatra/base'
require_relative 'models/settings'
require "json"


class MyApp < Sinatra::Base

  get '/settings' do
    headers 'Access-Control-Allow-Origin' => '*'
    settings = Settings.last
    { city: settings.city,
      temperature: settings.temperature,
      power_saving_mode: settings.power_saving_mode
    }.to_json
  end

  post '/settings' do
    Settings.all.destroy
    Settings.create(city: params[:city],
                    temperature: params[:temperature],
                    power_saving_mode: params[:power_saving_mode])
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

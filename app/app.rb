require 'sinatra/base'
require_relative 'models/settings'


class MyApp < Sinatra::Base
  get '/' do
    'Hello MyApp!'
  end

  post '/settings' do
    @settings = Settings.create(city: params[:city], temperature: params[:temperature], power_saving_mode: params[:power_saving_mode])
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end

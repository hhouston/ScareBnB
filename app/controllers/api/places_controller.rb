class Api::PlacesController < ApplicationController
  def index
    @places = Place.all
  end

  def create
  end
end

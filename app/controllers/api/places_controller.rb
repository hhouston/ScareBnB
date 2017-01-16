class Api::PlacesController < ApplicationController
  def index
    places = Place.all
    @places = places.includes(:reviews)

  end

  def show
    @place = Place.find(params[:id])
  end

  def create
  end
end

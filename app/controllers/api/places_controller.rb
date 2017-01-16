class Api::PlacesController < ApplicationController
  def index
    if params[:bounds]
      places = Place.in_bounds(params[:bounds])
    else
      places = Place.all
    end

    @places = places.includes(:reviews)
  end

  def show
    @place = Place.find(params[:id])
  end

  def create
  end
end

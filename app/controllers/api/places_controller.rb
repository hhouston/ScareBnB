class Api::PlacesController < ApplicationController
  def index
    if params[:bounds] && params[:maxGuest]
      places = Place.in_bounds_max_guest(params[:bounds], params[:maxGuest])
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

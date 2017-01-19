class Api::PlacesController < ApplicationController
  def create
    @place = Place.new(place_params)
    @place.host_id = current_user.id

    if @place.save
      render :show
    else
      render json: @place.errors.full_messages, status: 422
    end
  end

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

  private
  def place_params
    params.require(:place).permit(
      :name, :guests, :place_type,
      :location, :price, :info,
      :image_url, :lat, :long
    )
  end
end

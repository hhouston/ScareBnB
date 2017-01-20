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
    places = params[:bounds] ? Place.in_bounds(params[:bounds]) : Place.all

    places = places.where("guests >= ?", params[:maxGuest]) if params[:maxGuest]

    if params[:searchValue] && params[:searchValue] != ""
      searchValue = "%#{params[:searchValue].downcase}%"
      places = places.where("LOWER(name) LIKE ? OR LOWER(location) LIKE ?", searchValue, searchValue )

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

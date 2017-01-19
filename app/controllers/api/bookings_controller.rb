class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)

    @booking.guest_id = current_user.id
    if @booking.save
      #render :show
    else
      render json: @place.errors.full_messages, status: 422
    end
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :place_id)
  end
end

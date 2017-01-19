class Api::BookingsController < ApplicationController

  def create
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      render :show
    else
      render json: @place.errors.full_messages, status: 422
    end
  end


  def index
    @bookings = Booking.where(guest_id: current_user.id)
  end

  def show
    @booking = Booking.find(params[:id])
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render 'api/bookings/show'
  end

  private
  def booking_params
    params.require(:booking).permit(:start_date, :end_date, :place_id, :guest_id)
  end
end

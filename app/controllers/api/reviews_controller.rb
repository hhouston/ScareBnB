class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in, only: [:create]

  def index
    @reviews = Place.find(params[:place_id]).reviews
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :text, :author_id, :place_id)
  end
end

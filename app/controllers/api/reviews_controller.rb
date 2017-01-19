class Api::ReviewsController < ApplicationController
  # before_action :require_logged_in, only: [:create]


  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  def index
    @reviews = Place.find(params[:place_id]).reviews
  end
  
  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render 'api/reviews/show'
  end

  private

  def review_params
    params.require(:review).permit(:rating, :text, :place_id)
  end
end

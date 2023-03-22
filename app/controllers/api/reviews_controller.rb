class Api::ReviewsController < ApplicationController
    
    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end

    def index
        @reviews = Review.where(item_id: params[:item_id])
        render :index
    end

    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.delete
    end

    def update
        @review = Review.find(params[:id])
        @review.update(review_params)
        render :show
    end

    private

    def review_params
        params.require(:review).permit(:item_id, :author_id, :description, :headline, :rating, :display_name)
    end

end

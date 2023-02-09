class Api::ItemsController < ApplicationController

    def show
        @item = Item.find(params[:id])

        if @item
            render 'api/items/show'
        else
            render json: { item: nil }
        end
    end

end

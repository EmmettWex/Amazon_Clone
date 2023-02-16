class Api::ItemsController < ApplicationController

    def show
        @item = Item.find(params[:id])

        if @item
            render 'api/items/show'
        else
            render json: { item: nil }
        end
    end

    def index
        @items = Item.all

        if @items
            render 'api/items/index'
        else
            render json: { items: nil }
        end
    end

end

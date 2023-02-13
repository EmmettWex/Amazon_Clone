class Api::CartsController < ApplicationController

    def create
        @cart_item = Cart.new(cart_params)
        @cart_item.user_id = current_user.id

        if @cart_item.save
            @item = @cart_item.item
            render :show
        end
    end

    def index
        @current_user = current_user
        @cart_items = current_user.cart_items
        @items = current_user.items_in_cart
        render :index
    end

    def update
        @cart_item = Cart.find_by(id: params[:id])
        @cart_item.update(cart_params)
        @item = @cart_item.item
        render :show
    end

    def destroy
        @cart_item = Cart.find_by(id: params[:id])
        @cart_item.delete
    end

    private

    def cart_params
        params.require(:cart).permit(:item_id, :user_id, :quantity)
    end

end

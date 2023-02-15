class Api::CartsController < ApplicationController

    def show
        # debugger
        @cart_item = Cart.find_by(id: params[:id])
        render :show
    end

    def create

        # @cart_item = Cart.find_by
        # if @cart_item
        #     @cart_item.update(cart_params)
        # else
        #     @cart_item = Cart.new(cart_params)
        #     @cart_item.user_id = current_user.id

        #     if @cart_item.save
        #     @item = @cart_item.item
        #     end
        # end

        @cart_item = Cart.new(cart_params)
        @cart_item.user_id = current_user.id

        if @cart_item.save
            @item = @cart_item.item
            # render :show
        end
    end

    def index
        @current_user = current_user
        @cart_items = current_user.cart_items
        @items = current_user.items_in_cart
        render :index
    end

    def update
        # debugger
        @cart_item = Cart.find_by(id: params[:id])
        @cart_item.update(cart_params)
        @item = @cart_item.item
        render :show
    end

    def destroy
        @cart_item = Cart.find(params[:id])
        @cart_item.delete
    end

    private

    def cart_params
        # am I supposed to include user_id in the permit here for a create?
        params.require(:cart).permit(:item_id, :quantity, :user_id)
    end

end

class Api::ItemsController < ApplicationController

    def show
        @item = Item.find(params[:id])

        if @item
            render 'api/items/show'
        else
            render json: { item: nil }
        end
    end

    # def index
    #     @items = Item.all
    #     debugger
    #     if @items
    #         render 'api/items/index'
    #     else
    #         render json: { items: nil }
    #     end
    # end

    def index
        type = params[:item_type]
        search_terms = params[:search_terms]

        if type != '' && search_terms == ''
            # only search by type here
            @items = Item.where(item_type: type)
            
            if @items
                render 'api/items/index'
            else
                render json: { items: nil }
            end

        elsif type != '' && search_terms != ''
            # if both a type and search terms are provided
            # search by type first, and then by search terms
            items_by_type = Item.where(item_type: type)
            @items = items_by_type.where("name ILIKE ?", "%" + search_terms + "%")

            if @items
                render 'api/items/index'
            else
                render json: { items: nil }
            end

        elsif type == '' && search_terms != ''
            # if only search terms are provided
            @items = Item.where("name ILIKE ?", "%" + search_terms + "%")

            if @items
                render 'api/items/index'
            else
                render json: { items: nil }
            end

        elsif type == '' && search_terms == ''
            # search all items here
            @items = Item.all

            if @items
                render 'api/items/index'
            else
                render json: { items: nil }
            end
        end
    end

end

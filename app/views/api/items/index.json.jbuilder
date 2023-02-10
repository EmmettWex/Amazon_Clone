json.items({})

json.items do
    # json.all
    @items.each do |item|
        json.set! item.id do
            json.extract! item,
                :id,
                :name,
                :price,
                # :description, may not need description as part of the index object
                :item_type
        end
    end
    # json.types
    # json.names
end
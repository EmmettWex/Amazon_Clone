json.items({})

json.items do
    @items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :name, :price, :item_type, :description
            json.photourl url_for(item.photo)
        end
    end
end
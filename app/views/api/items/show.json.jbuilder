json.item do
    json.extract! @item, :id, :name, :price, :item_type, :description, :photourl
    # json.photourl url_for(@item.photo)
end
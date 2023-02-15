json.item do
    json.extract! @item, :id, :name, :price, :description
    json.photourl url_for(@item.photo)
end
json.extract! @cart_item, :id, :user_id, :item_id, :quantity
json.extract! @cart_item.item, :price
json.extract! @cart_item.item, :name
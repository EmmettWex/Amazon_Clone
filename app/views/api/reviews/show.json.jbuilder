json.extract! @review, :id, :headline, :rating, :description, :created_at, :display_name
json.extract! @review.item, :name, :item_type
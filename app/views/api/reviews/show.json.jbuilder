json.extract! @review, :id, :headline, :rating, :description, :created_at, :display_name, :author_id, :item_id
json.extract! @review.item, :name, :item_type
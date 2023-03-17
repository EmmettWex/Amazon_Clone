json.reviews({})

json.reviews do
    @reviews.each do |review|
        json.set! review.id do
            json.extract! review, :id, :headline, :rating, :description, :created_at, :display_name
            json.extract! review.item, :name, :item_type
        end
    end
end
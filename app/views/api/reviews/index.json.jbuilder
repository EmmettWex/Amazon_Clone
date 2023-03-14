json.reviews({})

json.reviews do
    @reviews.each do |review|
        review.set! review.id do
            json.extract! review, :id, :headline, :rating, :description, :author_id, :item_id, :created_at
            json.extract! review.item, :name, :item_type
        end
    end
end
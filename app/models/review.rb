# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  rating      :integer          not null
#  description :string           not null
#  author_id   :bigint           not null
#  item_id     :bigint           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  headline    :string           not null
#
class Review < ApplicationRecord

    validates :rating, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }
    validates :headline, :description, presence: true
    validates :author_id, :item_id, presence: true, uniqueness: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :item,
        primary_key: :id,
        foreign_key: :item_id,
        class_name: :Item

end

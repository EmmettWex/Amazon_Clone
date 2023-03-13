# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :bigint           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  item_type   :string           not null
#
class Item < ApplicationRecord

    validates :name, :price, :description, presence: false
    validates :name, uniqueness: true
    validates :cart_id, presence: false, allow_nil: true
    validates :item_type, presence: true

    has_many :cart_items,
        primary_key: :id,
        foreign_key: :item_id,
        class_name: :Cart

    has_one_attached :photo

    has_many :reviews,
        primary_key: :id,
        foreign_key: :item_id,
        class_name: :Review

end

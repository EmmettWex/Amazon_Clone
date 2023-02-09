# == Schema Information
#
# Table name: items
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :bigint           not null
#  description :string           not null
#  cart_id     :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Item < ApplicationRecord

    validates :name, :price, :description, null: false
    validates :name, uniqueness: true
    validates :cart_id, presence: false

    belongs_to :cart,
        primary_key: :id,
        foreign_key: :cart_id,
        class_name: :Cart

    # has_many :reviews,
    #     primary_key: :id,
    #     foreign_key: :item_id,
    #     class_name: :Review

end

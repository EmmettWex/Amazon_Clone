# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  item_id    :bigint           not null
#  quantity   :bigint           not null
#
class Cart < ApplicationRecord

    validates :user_id, :item_id, :quantity, presence: true
    # validates :user_id, uniqueness: { scope: :item_id }

    belongs_to :item,
        primary_key: :id,
        foreign_key: :item_id,
        class_name: :Item

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end

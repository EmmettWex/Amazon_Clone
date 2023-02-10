class ChangeItemsAndCarts < ActiveRecord::Migration[7.0]
  def change
    remove_column :items, :cart_id, :bigint
    add_reference :carts, :item, foreign_key: true
  end
end

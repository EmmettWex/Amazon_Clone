class AddQuantityToCart < ActiveRecord::Migration[7.0]
  def change
    add_column :carts, :quantity, :bigint, null: false
  end
end

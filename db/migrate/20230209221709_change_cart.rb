class ChangeCart < ActiveRecord::Migration[7.0]
  def change
    change_column :carts, :item_id, :bigint, null: false
  end
end

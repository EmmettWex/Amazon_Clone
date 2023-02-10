class ChangeItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :item_type, :string, null: false
    add_index :items, :item_type
  end
end

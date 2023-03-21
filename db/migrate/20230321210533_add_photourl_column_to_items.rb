class AddPhotourlColumnToItems < ActiveRecord::Migration[7.0]
  def change
    add_column :items, :photourl, :string
  end
end

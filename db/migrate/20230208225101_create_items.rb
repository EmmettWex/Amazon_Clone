class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.bigint :price, null: false
      t.string :description, null: false
      t.references :cart, null: true, foreign_key: true

      t.timestamps
    end
    add_index :items, :name, unique: true
  end
end

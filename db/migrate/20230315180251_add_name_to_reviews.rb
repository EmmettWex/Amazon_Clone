class AddNameToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :display_name, :string, null: false
  end
end

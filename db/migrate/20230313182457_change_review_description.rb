class ChangeReviewDescription < ActiveRecord::Migration[7.0]
  def change
    change_column :reviews, :description, :string, null: false
  end
end

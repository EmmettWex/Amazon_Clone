class FixColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :reviews, :author_id_id, :author_id
  end
end

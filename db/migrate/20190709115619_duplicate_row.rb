class DuplicateRow < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :duplicate, :boolean, default: false
  end
end

class ToggleTag < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :activated, :boolean, default: false
  end
end

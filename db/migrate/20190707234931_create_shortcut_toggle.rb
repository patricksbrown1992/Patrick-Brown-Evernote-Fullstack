class CreateShortcutToggle < ActiveRecord::Migration[5.2]
  def change
    add_column :notebooks, :shortcut, :boolean, default: false
    add_column :notes, :shortcut, :boolean, default: false
    
  end
end

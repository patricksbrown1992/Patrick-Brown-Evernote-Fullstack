class AddColumnUserId < ActiveRecord::Migration[5.2]
  def change
    add_column :taggings, :user_id, :integer
  end
end

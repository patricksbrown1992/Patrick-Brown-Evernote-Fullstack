# == Schema Information
#
# Table name: notebooks
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
    validates :user_id, :name, presence: true
    belongs_to :user
    
    has_many :notes


end

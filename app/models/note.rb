# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  title       :text             not null
#  body        :text             not null
#  notebook_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
    validates :notebook_id, :title, :body, presence: true
    belongs_to :notebook
end

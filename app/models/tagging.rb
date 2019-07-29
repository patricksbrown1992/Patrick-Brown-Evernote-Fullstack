# == Schema Information
#
# Table name: taggings
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  note_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
    validates_uniqueness_of :note_id, scope: [:tag_id]
    belongs_to :note
    belongs_to :tag

end

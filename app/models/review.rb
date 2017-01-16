# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  place_id   :integer          not null
#  text       :text
#  rating     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ActiveRecord::Base
  validates :rating, inclusion: { in: (1..5) }
  validates :place_id, :author_id, presence: true

  belongs_to :place,
  foreign_key: :place_id

  belongs_to :user,
  foreign_key: :author_id
end

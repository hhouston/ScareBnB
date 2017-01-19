# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  place_id   :integer          not null
#  guest_id   :integer          not null
#  start_date :date             not null
#  end_date   :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ActiveRecord::Base
  validates :place_id, :guest_id, :end_date, :start_date, presence: true

  belongs_to :place

  belongs_to :guest,
  primary_key: :id,
  foreign_key: :guest_id,
  class_name: :User
end

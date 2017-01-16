# == Schema Information
#
# Table name: places
#
#  id         :integer          not null, primary key
#  host_id    :integer          not null
#  name       :string           not null
#  location   :string           not null
#  price      :float            not null
#  rating     :integer          not null
#  lat        :float            not null
#  long       :float            not null
#  image_url  :string
#  info       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  guests     :integer          not null
#

class Place < ActiveRecord::Base
  validates :host_id, :location, :price, :rating, :info, :lat, :long, :guests, presence: true

  has_many :reviews,
  primary_key: :id,
  foreign_key: :place_id,
  class_name: :Review

  has_many :bookings

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "long"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "long"=>"-122.47791"}
    # }
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("long > ?", bounds[:southWest][:long])
        .where("long < ?", bounds[:northEast][:long])
  end

  def average_rating
  end
end

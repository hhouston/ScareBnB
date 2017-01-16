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
#

class Place < ActiveRecord::Base
  has_many :reviews,
  foreign_key: :place_id
end

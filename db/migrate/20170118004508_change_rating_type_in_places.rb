class ChangeRatingTypeInPlaces < ActiveRecord::Migration
  def change
    change_column :places, :rating, :float
  end
end

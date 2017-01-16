class AddGuestsToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :guests, :integer, null: false
  end
end

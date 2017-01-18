class AddColumnToPlaces < ActiveRecord::Migration
  def change
    add_column :places, :place_type, :string, :null => false
  end
end

class ChangeColumn < ActiveRecord::Migration
  def change
    change_column :places, :rating, :float, :null => true
  end
end

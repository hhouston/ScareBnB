class CreatePlaces < ActiveRecord::Migration
  def change
    create_table :places do |t|
      t.integer :host_id, null: false
      t.string :name, null: false
      t.string :location, null: false
      t.float :price, null: false
      t.integer :rating, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.string :image_url
      t.text :info, null: false
      
      t.timestamps null: false
    end
    add_index :places, :host_id
    add_index :places, :location
    add_index :places, :price
  end
end

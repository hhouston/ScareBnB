class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :place_id, null: false
      t.integer :guest_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps null: false
    end
    add_index :bookings, :place_id
    add_index :bookings, :guest_id
  end
end

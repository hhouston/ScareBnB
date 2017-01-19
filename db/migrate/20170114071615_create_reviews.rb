class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :place_id, null: false
      t.text :text
      t.integer :rating, null: false

      t.timestamps null: false
    end
    add_index :reviews, :author_id
    add_index :reviews, :place_id
  end
end

# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170118010623) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "place_id",   null: false
    t.integer  "guest_id",   null: false
    t.date     "start_date", null: false
    t.date     "end_date",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "bookings", ["guest_id"], name: "index_bookings_on_guest_id", using: :btree
  add_index "bookings", ["place_id"], name: "index_bookings_on_place_id", using: :btree

  create_table "places", force: :cascade do |t|
    t.integer  "host_id",    null: false
    t.string   "name",       null: false
    t.string   "location",   null: false
    t.float    "price",      null: false
    t.float    "rating"
    t.float    "lat",        null: false
    t.float    "long",       null: false
    t.string   "image_url"
    t.text     "info",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "guests",     null: false
    t.string   "place_type", null: false
  end

  add_index "places", ["host_id"], name: "index_places_on_host_id", using: :btree
  add_index "places", ["location"], name: "index_places_on_location", using: :btree
  add_index "places", ["price"], name: "index_places_on_price", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.integer  "place_id",   null: false
    t.text     "text"
    t.integer  "rating",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["author_id"], name: "index_reviews_on_author_id", using: :btree
  add_index "reviews", ["place_id"], name: "index_reviews_on_place_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "fname",           null: false
    t.string   "lname",           null: false
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree

end

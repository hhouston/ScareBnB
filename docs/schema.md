# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | default

## places
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key, indexed
host_id     | integer   | not null, foreign key: users, indexed
name        | string    | not null
location    | float     | not null
lat         | float     |
long        | string    |
image_url   | string    | default
info        | string    | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
place_id    | integer   | not null, foreign key: places, indexed
guest_id    | integer   | not null, foreign key: users, indexed
start_date  | string    | not null
end_date    | string    | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key: users, indexed
place_id    | integer   | not null, foreign key: places, indexed
ratings     | float     | not null
review      | text      | not null

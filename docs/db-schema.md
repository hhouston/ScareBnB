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
location    | string    | not null
price       | float     | not null
rating      | integer   |
lat         | float     |
long        | float     |
image_url   | string    | default
info        | string    | not null
guests      | integer   | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
place_id    | integer   | not null, foreign key: places, indexed
guest_id    | integer   | not null, foreign key: users, indexed
start_date  | date    | not null
end_date    | date    | not null
image_url   | string    |

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key: users, indexed
place_id    | integer   | not null, foreign key: places, indexed
ratings     | float     | not null
review      | text      | not null

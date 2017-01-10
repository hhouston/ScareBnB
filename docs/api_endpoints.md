# API Endpoints

## HTML API

### Root

- `GET /`

### Users

- `GET /users/new`
- `POST /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Places

- `GET /api/places`
- `POST /api/places`
- `GET /api/places/:id`
- `PATCH /api/places/:id`
- `DELETE /api/places/:id`

### Bookings

- `GET /api/places/:id/bookings`
- `POST /api/users/:id/bookings`
- `DELETE /api/users/:id/bookings/:id`

### Reviews

- `GET /api/places/:id/reviews`
- `POST /api/places/:id/reviews`
- `DELETE /api/places/:id/reviews/:id`

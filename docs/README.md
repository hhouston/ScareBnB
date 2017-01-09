# TreeTopBnB

[heroku link][heroku]
[Trello link][trello]

[trello]: https://trello.com/b/Rw7FxNOD/treetopbnb
[heroku]: https://treetopbnb.herokuapp.com/#/

## Minimum Viable Product

TreeTop BnB connects you to the world of stunning treetop architecture. It is a web application, inspired by Airbnb, and built using Ruby on Rails and React/Redux. By the end of Week 9, TreeTopBnB, will have all of the following functionality:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Spots
- [ ] Bookings
- [ ] Spots search (by location & availability) & Google Maps on search
- [ ] Reviews
- [ ] Production README

Each of these features will include smooth, bug-free navigation, necessary seed data to display the feature, and polished CSS styling.

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes/
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase I: New account creation/login and homepage (2 days)

**Objective:** Functioning homepage with working log in and sign up modals

### Phase II: Spot model and featured spots (1 day)

**Objective:** Featured spots are listed on the homepage with active links to spot detail pages.

### Phase III: Spot search page with google map and homepage search bar (2 days)

**Objective:** Functioning search bar on homepage that links to search page. Search page lists spots that actively filter by search params.
Interactive Google map mirrors search results.

### Phase IV: Bookings model (1 day)

**Objective:** Bookings belong to spots and users and can be created, read, and destroyed. Spot search results account for exsiting bookings.

### Phase 5: Reviews model (1 day)

**Objective:** Users can leave reviews and rate spots. Reviews and ratings appear on spot detail page and can be created, read, updated, and destroyed.

### Bonus Features (TBD)

### Phase 6: User dashboard

**Objective:** Users have a dashboard with detailed profile

### Phase 7: Users can list spots

**Objective:** Users can become hosts and add listed spots from their dashboard. Spots can be created, read, updated, and destroyed.

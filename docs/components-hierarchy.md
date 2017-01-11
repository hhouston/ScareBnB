## Component Hierarchy

**HeaderContainer**
 - Header
  * HeaderLoggedIn
    * WelcomeContainer
      - LogOut Button
  * HeaderLoggedOut
    * LogInModal
      - SessionFormContainer
        * SessionForm
          - SessionLogin
          - SessionSignUp

**HomeContainer**
 - Home
 - SearchBar
  - FeaturedPlacesContainer
    - FeaturedPlacesContainer
      - FeaturedPlaceDetail

**SearchContainer**
 - Search
  * SearchResults
  * MapContainer
    - Map

**PlaceContainer**
 - Place
  * PlaceDetails
  * Reviews
  * BookingFormContainer
    - BookingForm

**BookingsContainer**
 - Bookings
  * BookingDetail

**UserContainer**
 - User
  * UserProfile
  * PlaceFormContainer
    - PlaceForm
  * BookingsContainer



## Routes

Path   | Component   
-------|-------------
"/" | "HomeContainer"
"/search" | "SearchContainer"
"/places/:placeId" | "PlaceContainer"
"/places/:placeId/bookings" | "BookingsContainer"
"/users/:userId/bookings" | "BookingsContainer"
"/users/:userId" | "UserContainer"

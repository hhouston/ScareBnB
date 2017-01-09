## Component Hierarchy

**HeaderContainer**
 - Header
  * HeaderLoggedIn
    * LogInModal
      - SessionFormContainer
        * SessionForm
          - SessionLogin
          - SessionSignUp
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



## Routes

Path   | Component   
-------|-------------
"/" | "HeaderContainer"
"/home" | "HomeContainer"
"/search" | "SearchContainer"
"/places/:placeId" | "PlaceContainer"
"/bookings" | "BookingsContainer"
"/users/:userId" | "UserContainer"

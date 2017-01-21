const React = require('react');
import DateRangePickerWrapper from '../date_picker/DateRangePickerWrapper';

const handleChange = (filter, updateFilter) => (e => updateFilter(filter, e.currentTarget.value));

const FilterForm = ({maxGuest, updateFilter}) => (
    <div className="home-search-container">
        <span className="search-bar-title">
          <h1 style={{textAlign: "center", display: "block"}}>Search</h1>
        </span>

        <div className="search-bar-container">
            <div className="location-container search-item">
                Number of guests:
                <input type="text" onChange={handleChange('searchValue', updateFilter)} className="form-control" placeholder="Search"/>
            </div>

            <div className="calender-container search-item">

            </div>

            <div className="guests-container search-item">
                Enter location:
                <input type="number" value={maxGuest} onChange={handleChange('maxGuest', updateFilter)}/>
            </div>
        </div>
    </div>
);

export default FilterForm;

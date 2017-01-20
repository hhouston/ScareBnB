const React = require('react');

const handleChange = (filter, updateFilter) => (
  e => updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ maxGuest, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>

    <label>Maximum Guests </label>
    <input
      type="number"
      value={maxGuest}
      onChange={handleChange('maxGuest', updateFilter)}
    />

    <div className="form-group">
        <input type="text"
                onChange={handleChange('searchValue', updateFilter)}
                className="form-control"
                placeholder="Search"
        />
    </div>


    <button type="submit" className="btn btn-default">Submit</button>

  </div>
);

export default FilterForm;

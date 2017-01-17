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
      onChange={handleChange('maxGuest', updateFilter)}/>
  </div>
);

export default FilterForm;

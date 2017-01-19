import React from 'react';
import { DateRangePicker } from 'react-dates';

class DateRangePickerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  handleSubmit(e) {
      e.preventDefault();

      const booking = Object.assign({}, this.state, {
        place_id: this.props.placeId,
        startDate: this.state.startDate._d,
        endDate: this.state.endDate._d

      });
      debugger;

      this.props.createBooking(booking).then(data => {
          this.props.router.push(`/places/${data.place.id}`);
      });
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div>
        <DateRangePicker
          {...this.props}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
          startDate={startDate}
          endDate={endDate}
        />

      <button onClick={this.handleSubmit}>Book</button>
      </div>
    );
  }
}

export default DateRangePickerWrapper;

import React from 'react';
import { DateRangePicker } from 'react-dates';
import { withRouter } from 'react-router';

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

      const booking = {
        place_id: this.props.placeId,
        start_date: this.state.startDate._d,
        end_date: this.state.endDate._d
      };

      this.props.createBooking(booking).then(data => {
          this.props.router.push(`/bookings`);
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

export default withRouter(DateRangePickerWrapper);
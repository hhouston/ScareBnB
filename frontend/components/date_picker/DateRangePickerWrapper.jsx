import React from 'react';
import { DateRangePicker } from 'react-dates';
import { withRouter } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';

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

      if (this.state.startDate === null || this.state.endDate) {
        return <Alert>Please choose dates</Alert>;
      } else {
        const booking = {
          place_id: this.props.placeId,
          start_date: this.state.startDate._d,
          end_date: this.state.endDate._d
        };

        this.props.createBooking(booking).then(data => {
          this.props.router.push(`/bookings`);
        });

      }
  }

  render() {
    let bookButton;

    if (this.props.currentUser === null) {
      bookButton = <Button onClick={this.handleSubmit} disabled={true} className="btn btn-primary" type="button">Book</Button>;
    } else {
      bookButton = <Button type="button" className="btn btn-primary">Book</Button>;

    }

    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div className="date-range-picker">
          <DateRangePicker
            {...this.props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
          />
          <br />
          {bookButton}
      </div>
    );
  }
}

export default withRouter(DateRangePickerWrapper);

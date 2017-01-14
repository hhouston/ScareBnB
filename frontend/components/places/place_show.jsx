import React from 'react';

class Place extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    // this.setState({
    //   place: this.props.fetchPlace(parseInt(this.props.params.placeId))
    // });
    this.props.fetchPlace(parseInt(this.props.params.placeId));
  }

  render() {
    // const place = this.props.fetchPlace(parseInt(this.props.params.placeId));
    // let name;
    // if (this.state) {
    //   name = this.state.place.name;
    // }

    return(
      <div>
        {
          this.props.place.name
        }
        <h4>hey</h4>
      </div>
    );
  }
}

export default Place;

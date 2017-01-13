import React from 'react';

class Places extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    debugger;
    return(
      <div>
        <h1>places</h1>
      </div>
    );
  }
}

export default Places;

import React from 'react';

class Places extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchPlaces();
  }

  render() {
    return(
      <div>
        <h1>benches</h1>
      </div>
    );
  }
}

export default Places;

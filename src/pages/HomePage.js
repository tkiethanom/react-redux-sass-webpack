import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class HomePage extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <div className="">
        Home
      </div>
    );
  }
}

HomePage.propTypes = {};

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return state;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(HomePage);

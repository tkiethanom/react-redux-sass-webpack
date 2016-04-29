import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {connect} from 'react-redux';

import * as Pages from './pages/index';

export default class Routes extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory} onUpdate={() => this.handleRouteChange()}>
        <Route path="/" component={Pages.AppPage}>
          <IndexRoute title="Home" component={Pages.HomePage} />

          <Route path="/404" component={Pages.Error404Page}/>
          <Route path="*" component={Pages.Error404Page}/>
        </Route>
      </Router>
    );
  }

  handleRouteChange(){

  }
}

// Which props do we want to inject, given the global state?
function mapStateToProps(state) {
  return {
    state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Routes);

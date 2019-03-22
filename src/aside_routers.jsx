import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideBarHome from './components/SideBarHome';

import {
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

class AsideRouters extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
      <Switch>
        <Route exact path="/" component={SideBarHome} />
        <Route path="/home-messages" component={SideBarHome} />
      </Switch>
		)
	};
}

AsideRouters.propTypes = {

};

export default AsideRouters;

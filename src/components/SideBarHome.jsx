import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AsideHoc from './asideHoc';

class SideBarHome extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			  <div className="menu">
				  <ul>
					  <li> <Link to="/">Home view 1</Link> </li>
					  <li> <Link to="/home-messages">Another option of home view</Link> </li>
					  <li> <Link to="/about">Another option of home view - 2</Link> </li>
				  </ul>
			  </div>
		)
	};
}

SideBarHome.propTypes = {

};

export default AsideHoc(SideBarHome);

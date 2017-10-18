import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import classnames from 'classnames';

class NavLink extends Component {
  render() {
    let classes = classnames('nav-link', {
      'link-active': RegExp(this.props.to).test(this.props.currentPath)
    });
    return (
      <Link className={classes} to={this.props.to}>
        <a>{this.props.children}</a>
      </Link>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default NavLink;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import profile from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      hidden: true,
    };

    this.withSearch = this.withSearch.bind(this);
    this.withoutSearch = this.withoutSearch.bind(this);
  }

  withSearch() {
    const { pageTitle } = this.props;
    const { hidden } = this.state;

    return (
      <header>
        <h1 data-testid="page-title">{pageTitle}</h1>
        <button type="button">
          <img
            type="image"
            data-testid="profile-top-btn"
            src={ profile }
            alt=" Profile Icon"
          />
        </button>
        &nbsp;  &nbsp;  &nbsp;
        <button
          type="button"
          onClick={ () => (hidden
            ? this.setState({ hidden: false })
            : this.setState({ hidden: true })) }
        >
          <img
            type="image"
            data-testid="search-top-btn"
            src={ search }
            alt=" Search Icon"
          />
        </button>
       &nbsp;  &nbsp;  &nbsp;
        {!hidden && <input data-testid="search-input" type="text" placeholder="Search" />}
      </header>
    );
  }

  withoutSearch() {
    const { pageTitle } = this.props;
    return (
      <header>
        <h1 data-testid="page-title">{ pageTitle }</h1>
        <input
          type="image"
          data-testid="profile-top-btn"
          src={ profile }
          alt=" Profile Icon"
        />
      </header>
    );
  }

  render() {
    const { withSearch } = this.props;
    return (
      <div>
        {withSearch ? this.withSearch() : this.withoutSearch() }
      </div>
    );
  }
}

Header.propTypes = {
  withSearch: PropTypes.bool,
  pageTitle: PropTypes.string,
}.isRequired;

export default Header;

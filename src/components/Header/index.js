import React from 'react';
import PropTypes from 'prop-types';
import Styles from './header.css';

const Header = props => {
  const { name, label } = props;
  return (
    <div className={Styles.header}>
      <div className={Styles.headerContent}>
        <div className={Styles.headerText}>{name}</div>
        <div className={Styles.subtitle}>{label}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Header;

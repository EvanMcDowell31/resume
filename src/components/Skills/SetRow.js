import React from 'react';
import PropTypes from 'prop-types';
import Styles from './skills.css';

const SetRow = props => {
  const getColumnStyles = () => {
    const { column, length } = props;
    return column !== length - 1 ? Styles.setCol : Styles.lastCol;
  };

  const { set } = props;
  const { name, skills } = set;
  return (
    <div className={getColumnStyles()}>
      <div className={Styles.colTitle}>{name}</div>
      <ul>
        {skills.map(skill => (
          <li>&nbsp; {skill}</li>
        ))}
      </ul>
    </div>
  );
};

SetRow.propTypes = {
  set: PropTypes.object,
  column: PropTypes.number,
  length: PropTypes.number,
};

export default SetRow;

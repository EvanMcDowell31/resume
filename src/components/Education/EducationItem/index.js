import React from 'react';
import PropTypes from 'prop-types';
import Styles from './educationItem.css';

const EducationItem = props => {
  const { item } = props;
  const { level, summary, institution, location, end } = item;
  const edString = ` ${summary} ${institution}, ${location} (${end})`;
  return (
    <div className={Styles.itemContainer}>
      <div className={Styles.bold}>
        {level}
        ,&nbsp;
      </div>
      <div>{edString}</div>
    </div>
  );
};

EducationItem.propTypes = {
  item: PropTypes.object,
};

export default EducationItem;

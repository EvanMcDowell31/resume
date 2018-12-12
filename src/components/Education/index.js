import React from 'react';
import PropTypes from 'prop-types';
import Styles from './education.css';
import EducationItem from './EducationItem';

const Education = props => {
  const { educationHistory } = props;
  return (
    <div className={Styles.education}>
      <h1>Education</h1>
      {educationHistory.map(item => (
        <EducationItem item={item} />
      ))}
    </div>
  );
};

Education.propTypes = {
  educationHistory: PropTypes.arrayOf(PropTypes.object),
};

export default Education;

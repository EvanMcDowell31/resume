import React from 'react';
import PropTypes from 'prop-types';
import ExperienceItem from './ExperienceItem';
import Styles from './experience.css';

const Experience = props => {
  const { experience } = props;
  const title = 'Professional Experience';
  return (
    <div className={Styles.experience}>
      <h1>{title}</h1>
      {experience.map(item => (
        <ExperienceItem item={item} />
      ))}
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.object),
};

export default Experience;

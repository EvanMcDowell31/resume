import React from 'react';
import PropTypes from 'prop-types';
import Styles from './skills.css';
import SetRow from './SetRow';

const Skills = props => {
  const { sets } = props;
  return (
    <div className={Styles.skills}>
      <h1>Technical Skills</h1>
      <div className={Styles.setRow}>
        {sets.map((set, index) => (
          <SetRow set={set} column={index} length={sets.length} />
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  sets: PropTypes.arrayOf(PropTypes.object),
};

export default Skills;

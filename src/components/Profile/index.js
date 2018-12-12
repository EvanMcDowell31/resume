import React from 'react';
import PropTypes from 'prop-types';
import Styles from './profile.css';

const Profile = props => {
  const { brief } = props;
  const title = 'Profile';
  return (
    <div className={Styles.profile}>
      <h1>{title}</h1>
      {brief}
    </div>
  );
};

Profile.propTypes = {
  brief: PropTypes.string,
};

export default Profile;

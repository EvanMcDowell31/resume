import React from 'react';
import PropTypes from 'prop-types';
import Styles from './social.css';
import GitHubIcon from '../../images/Github/GitHub-Mark-32px.png';
import LinkedInIcon from '../../images/LinkedIn/In-2C-34px-R.png';

const Social = props => {
  const { social } = props;
  const urls = social.reduce((acc, item) => {
    acc[item.network] = item.url;
    return acc;
  }, {});
  const GitHubUrl = urls.GitHub;
  const LinkedInUrl = urls.LinkedIn;

  return (
    <div className={Styles.social}>
      <a href={GitHubUrl} target="_blank">
        <img src={GitHubIcon} alt="GitHub" />
      </a>
      &nbsp; &nbsp; &nbsp;
      <a href={LinkedInUrl} target="_blank">
        <img src={LinkedInIcon} alt="LinkedIn" />
      </a>
    </div>
  );
};

Social.propTypes = {
  social: PropTypes.arrayOf(PropTypes.object),
};

export default Social;

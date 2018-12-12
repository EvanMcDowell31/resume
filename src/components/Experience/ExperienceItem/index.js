import React from 'react';
import PropTypes from 'prop-types';
import Styles from './experienceItem.css';

const ExperienceItem = props => {
  const getDateRange = (start, end, current) =>
    start !== end ? `${start} - ${current ? 'present' : end}` : start;

  const {
    position,
    employer,
    summary,
    start,
    end,
    url,
    highlights,
    current,
  } = props.item;
  return (
    <div className={Styles.itemContainer}>
      <div>
        <a className={Styles.link} href={url} target="_blank">
          {employer}
        </a>
        <div className={Styles.bold}>{position}</div>
      </div>
      <div className={Styles.dateRange}>
        {getDateRange(start, end, current)}
      </div>
      <div>{summary}</div>
      <ul>
        {highlights.map(sentence => (
          <li>{sentence}</li>
        ))}
      </ul>
    </div>
  );
};

ExperienceItem.propTypes = {
  item: PropTypes.object,
};

export default ExperienceItem;

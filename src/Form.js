import React from 'react';
import PropTypes from 'prop-types';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = ({ location, setLocation, onSubmit }) => {
  return (
    <>
      <form className="formm" onSubmit={onSubmit}>
        <FontAwesomeIcon icon={faMapLocationDot} size="lg" />
        <input
          aria-label="location"
          type="text"
          className="search"
          placeholder="Search for location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit" className="btnClass">
          SEARCH
        </button>
      </form>
    </>
  );
};

export default Form;

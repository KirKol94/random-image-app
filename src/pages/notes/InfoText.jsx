import React from 'react';
import PropTypes from 'prop-types';

function InfoText({ text }) {
  return <h1 className="py-5 text-center text-2xl">{text}</h1>;
}

InfoText.propTypes = PropTypes.string.isRequired;

export default InfoText;

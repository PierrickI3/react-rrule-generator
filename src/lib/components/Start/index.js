import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';

import translateLabel from '../../utils/translateLabel';

const Start = ({
  id,
  start: {
    onDate,
  },
  handleChange,
  translations
}) => (
  <div className="form-group">
    <label htmlFor={id} className="col-form-label text-boldy">
      {translateLabel(translations, 'start.label')}
    </label>
    <StartOnDate id={id} onDate={onDate} handleChange={handleChange} translations={translations} />
  </div>
);

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Start;

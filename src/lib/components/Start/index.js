import React from 'react';
import PropTypes from 'prop-types';
import StartOnDate from './OnDate';

import translateLabel from '../../utils/translateLabel';

const Start = ({
 id, start: { onDate }, handleChange, translations 
}) => (
  <div className="form-group form-row">
    <label htmlFor={id} className="col-form-label col-4">
      {translateLabel(translations, 'start.label')}
    </label>
    <div className="col-8">
      <StartOnDate
        id={id}
        onDate={onDate}
        handleChange={handleChange}
        translations={translations}
      />
    </div>
  </div>
);

Start.propTypes = {
  id: PropTypes.string.isRequired,
  start: PropTypes.shape({
    onDate: PropTypes.object.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};

export default Start;

import React from 'react';
import PropTypes from 'prop-types';
import EndAfter from './After';
import EndOnDate from './OnDate';

import translateLabel from '../../utils/translateLabel';

const End = ({
  id,
  end: {
 mode, after, onDate, options 
},
  handleChange,
  translations,
}) => {
  const isOptionAvailable = option =>
    !options.modes || options.modes.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <React.Fragment>
      <div className="form-group form-row align-items-center">
        <label htmlFor={id} className="form-control-label col-3 mb-0">
          {translateLabel(translations, 'end.label')}
        </label>
        <div className="col-3">
          <select
            name="end.mode"
            id={id}
            className="form-control "
            value={mode}
            onChange={handleChange}
          >
            {isOptionAvailable('Never') && (
              <option value="Never">
                {translateLabel(translations, 'end.never')}
              </option>
            )}
            {isOptionAvailable('After') && (
              <option value="After">
                {translateLabel(translations, 'end.after')}
              </option>
            )}
            {isOptionAvailable('On date') && (
              <option value="On date">
                {translateLabel(translations, 'end.on_date')}
              </option>
            )}
          </select>
        </div>

        {isOptionSelected('After') && (
          <EndAfter
            id={`${id}-after`}
            after={after}
            handleChange={handleChange}
            translations={translations}
          />
        )}

        {isOptionSelected('On date') && (
          <EndOnDate
            id={`${id}-onDate`}
            onDate={onDate}
            handleChange={handleChange}
            translations={translations}
          />
        )}
      </div>
    </React.Fragment>
  );
};

End.propTypes = {
  id: PropTypes.string.isRequired,
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};

export default End;

import React from 'react';
import PropTypes from 'prop-types';

import { DAYS } from '../../../constants/index';
import translateLabel from '../../../utils/translateLabel';

const RepeatMonthlyOnThe = ({
  id,
  mode,
  onThe,
  hasMoreModes,
  handleChange,
  translations,
}) => {
  const isActive = mode === 'on the';

  return (
    <React.Fragment>
      <div className="form-group form-row d-flex align-items-center">
        <div className="col-3">
          {hasMoreModes && (
            <div className="custom-control custom-radio custom-control-inline">
              <input
                id={id}
                type="radio"
                name="repeat.monthly.mode"
                aria-label="Repeat monthly on the"
                value="on the"
                checked={isActive}
                onChange={handleChange}
                className="custom-control-input"
              />
              <label htmlFor={id} className="custom-control-label">
                {translateLabel(translations, 'repeat.monthly.on_the')}
              </label>
            </div>
          )}
        </div>

        <div className={`col-3 ${!isActive && 'opacity-50'}`}>
          <select
            id={`${id}-which`}
            name="repeat.monthly.onThe.which"
            aria-label="Repeat monthly on the which"
            className="form-control"
            value={onThe.which}
            disabled={!isActive}
            onChange={handleChange}
          >
            <option value="First">
              {translateLabel(translations, 'numerals.first')}
            </option>
            <option value="Second">
              {translateLabel(translations, 'numerals.second')}
            </option>
            <option value="Third">
              {translateLabel(translations, 'numerals.third')}
            </option>
            <option value="Fourth">
              {translateLabel(translations, 'numerals.fourth')}
            </option>
            <option value="Last">
              {translateLabel(translations, 'numerals.last')}
            </option>
          </select>
        </div>

        <div className={`col-3 ${!isActive && 'opacity-50'}`}>
          <select
            id={`${id}-day`}
            name="repeat.monthly.onThe.day"
            aria-label="Repeat monthly on the day"
            className="form-control"
            value={onThe.day}
            disabled={!isActive}
            onChange={handleChange}
          >
            {DAYS.map(day => (
              <option key={day} value={day}>
                {translateLabel(translations, `days.${day.toLowerCase()}`)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};
RepeatMonthlyOnThe.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last'])
      .isRequired,
    day: PropTypes.oneOf(DAYS).isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};

export default RepeatMonthlyOnThe;

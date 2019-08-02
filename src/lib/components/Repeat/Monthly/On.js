import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';

const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations,
}) => {
  const isActive = mode === 'on';

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
                aria-label="Repeat monthly on"
                value="on"
                checked={isActive}
                onChange={handleChange}
                className="custom-control-input"
              />
              <label
                htmlFor={id}
                className="custom-control-label text-capitalize text-boldy"
              >
                {translateLabel(translations, 'repeat.monthly.on_day')}
              </label>
            </div>
          )}
        </div>

        <div className={`col-3 ${!isActive && 'opacity-50'}`}>
          <select
            id={`${id}-day`}
            name="repeat.monthly.on.day"
            aria-label="Repeat monthly on a day"
            className="form-control"
            value={on.day}
            disabled={!isActive}
            onChange={numericalFieldHandler(handleChange)}
          >
            {[...new Array(31)].map((day, i) => (
              <option key={i} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
    </React.Fragment>
  );
};
RepeatMonthlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};

export default RepeatMonthlyOn;

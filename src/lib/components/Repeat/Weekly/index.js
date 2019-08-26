import React from 'react';
import PropTypes from 'prop-types';
import { toPairs } from 'lodash';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';

const RepeatWeekly = ({
  id,
  weekly: { interval, days, options },
  handleChange,
  translations,
}) => {
  let daysArray = toPairs(days);
  if (options.weekStartsOnSunday) {
    daysArray = daysArray.slice(-1).concat(daysArray.slice(0, -1));
  }

  return (
    <React.Fragment>
      <div className="form-group form-row align-items-center">
        <div className="form-control-label col-3">
          {translateLabel(translations, 'repeat.weekly.every')}
        </div>
        <div className="input-group col-4">
          <input
            id={`${id}-interval`}
            name="repeat.weekly.interval"
            aria-label="Repeat weekly interval"
            className="form-control"
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
          />
          <div className="input-group-append">
            <span className="input-group-text text-sm">
              {translateLabel(translations, 'repeat.weekly.weeks')}
            </span>
          </div>
        </div>
      </div>

      <div className="form-group form-row align-items-center">
        <div className="form-control-label col-3">
          {translateLabel(translations, 'days.label')}
        </div>
        <div className="btn-group btn-group-sm btn-group-toggle d-flex col-9">
          {daysArray.map(([dayName, isDayActive]) => (
            <label
              htmlFor={`${id}-${dayName}`}
              key={dayName}
              style={{ width: '14.28%' }}
              className={`btn btn-outline-primary px-0 ${
                isDayActive ? 'active' : ' '
              }`}
            >
              <input
                type="checkbox"
                id={`${id}-${dayName}`}
                name={`repeat.weekly.days[${dayName}]`}
                className="form-control"
                checked={isDayActive}
                onChange={(event) => {
                  const editedEvent = {
                    ...event,
                    target: {
                      ...event.target,
                      value: !isDayActive,
                      name: event.target.name,
                    },
                  };

                  handleChange(editedEvent);
                }}
              />
              {translateLabel(
                translations,
                `days_short.${dayName.toLowerCase()}`,
              )}
            </label>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

RepeatWeekly.propTypes = {
  id: PropTypes.string.isRequired,
  weekly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
    days: PropTypes.shape({
      mon: PropTypes.bool.isRequired,
      tue: PropTypes.bool.isRequired,
      wed: PropTypes.bool.isRequired,
      thu: PropTypes.bool.isRequired,
      fri: PropTypes.bool.isRequired,
      sat: PropTypes.bool.isRequired,
      sun: PropTypes.bool.isRequired,
    }).isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};

export default RepeatWeekly;

import React from 'react';
import PropTypes from 'prop-types';
import RepeatMonthlyOn from './On';
import RepeatMonthlyOnThe from './OnThe';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';

const RepeatMonthly = ({
  id,
  monthly: {
 mode, interval, on, onThe, options 
},
  handleChange,
  translations,
}) => {
  const isTheOnlyOneMode = option => options.modes === option;
  const isOptionAvailable = option =>
    !options.modes || isTheOnlyOneMode(option);

  return (
    <React.Fragment>
      <div className="form-group form-row d-flex align-items-center">
        <div className="col-form-label col-3 text-capitalize">
          {translateLabel(translations, 'repeat.monthly.every')}
        </div>
        <div className="input-group col-4">
          <input
            id={`${id}-interval`}
            name="repeat.monthly.interval"
            aria-label="Repeat monthly interval"
            className="form-control"
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
          />
          <div className="input-group-append">
            <span className="input-group-text text-sm">
              {translateLabel(translations, 'repeat.monthly.months')}
            </span>
          </div>
        </div>
      </div>

      <div className="form-group mb-0">
        {isOptionAvailable('on') && (
          <RepeatMonthlyOn
            id={`${id}-on`}
            mode={mode}
            on={on}
            hasMoreModes={!isTheOnlyOneMode('on')}
            handleChange={handleChange}
            translations={translations}
          />
        )}
      </div>

      <div className="form-group">
        {isOptionAvailable('on the') && (
          <RepeatMonthlyOnThe
            id={`${id}-onThe`}
            mode={mode}
            onThe={onThe}
            hasMoreModes={!isTheOnlyOneMode('on the')}
            handleChange={handleChange}
            translations={translations}
          />
        )}
      </div>
    </React.Fragment>
  );
};

RepeatMonthly.propTypes = {
  id: PropTypes.string.isRequired,
  monthly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    interval: PropTypes.number.isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired,
};

export default RepeatMonthly;

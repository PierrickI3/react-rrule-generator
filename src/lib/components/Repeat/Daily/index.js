import React from "react";
import PropTypes from "prop-types";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import translateLabel from "../../../utils/translateLabel";

const RepeatDaily = ({
  id,
  daily: { interval },
  handleChange,
  translations
}) => (
  <div className="form-group form-row d-flex align-items-center">
    <div className="form-control-label col-4 text-capitalize">
      {translateLabel(translations, "repeat.daily.every")}
    </div>
    <div className="input-group col-4">
      <input
        id={`${id}-interval`}
        name="repeat.daily.interval"
        aria-label="Repeat daily interval"
        className="form-control"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
      />
      <div className="input-group-append">
        <span className="input-group-text text-sm text-boldy">
          {translateLabel(translations, "repeat.daily.days")}
        </span>
      </div>
    </div>
  </div>
);
RepeatDaily.propTypes = {
  id: PropTypes.string.isRequired,
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
    .isRequired
};

export default RepeatDaily;

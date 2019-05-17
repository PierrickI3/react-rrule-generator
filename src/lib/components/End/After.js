import React from 'react';
import PropTypes from 'prop-types';
import numericalFieldHandler from '../../utils/numericalFieldHandler';
import translateLabel from '../../utils/translateLabel';

const EndAfter = ({
  id,
  after,
  handleChange,
  translations
}) => (
  <div className="col-9 ">
    <div className="col-form-label text-capitalize text-boldy">
      {translateLabel(translations, 'end.executions')}
    </div>
    <input
      id={id}
      name="end.after"
      aria-label="End after"
      className="form-control"
      value={after}
      onChange={numericalFieldHandler(handleChange)}
    />
  </div>
);

EndAfter.propTypes = {
  id: PropTypes.string.isRequired,
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndAfter;

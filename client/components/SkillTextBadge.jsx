import React from 'react';
import PropTypes from 'prop-types';

function SkillTextBadge(props) {
  if (!props.render) {
    return null;
  }
  else {
    let classes = "skillTextBadge " + props.className;
    return(
      <span className={classes}><span className="glyphicon glyphicon-warning-sign"></span>[{props.renderText}]</span>
    )
  }
}

SkillTextBadge.propTypes = {
  className: PropTypes.string,
  render: PropTypes.bool,
  renderText: PropTypes.string
};

SkillTextBadge.defaultProps = {
  className: ''
};

export default SkillTextBadge;

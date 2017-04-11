import React from 'react';

function SkillTextBadge(props) {
  if (!props.render) {
    return null;
  }
  else {
    return(
      <span className="skillTextBadge"><span className="glyphicon glyphicon-warning-sign"></span>[{props.renderText}]</span>
    )
  }
}

export default SkillTextBadge;

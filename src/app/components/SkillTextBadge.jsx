import React from 'react';

function SkillTextBadge(props) {
  if (!props.render) {
    return null;
  }
  else {
    return(
      <span className="skillTextBadge">[{props.renderText}]</span>
    )
  }
}

export default SkillTextBadge;

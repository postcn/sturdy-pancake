import React from 'react';

function SkillPushableComponent(props) {
  if (props.isPushable) {
    let pushExampleList = props.pushExamples.map(function (push, index) {
      return <li className="pushExample" key={index}>{push}</li>;
    });
    let failedPushExampleList = props.failedPushExamples.map(function (push, index) {
      return <li className="pushExample"key={index}>{push}</li>
    });
    return (
      <div className="pushComponents well">
        <div className="pushExamples">
          <span className="title">Examples of pushing skill</span>
          <ul>{pushExampleList}</ul>
        </div>
        <div className="failedPushExamples">
          <span className="title">Examples of failing to push skill</span>
          <ul>{failedPushExampleList}</ul>
        </div>
      </div>
    );
  }
  else {
    return(
      <div className="pushComponents">
        This skill cannot be pushed.
      </div>
    );
  }
}

export default SkillPushableComponent;

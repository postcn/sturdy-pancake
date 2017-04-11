import React from 'react';
import classnames from 'classnames';

import SkillTextBadge from './SkillTextBadge.jsx';
import SkillPushableComponent from './SkillPushableComponent.jsx';
import SpecializationComponent from './SpecializationComponent.jsx';
import style from '../css/skill.scss';

class Skill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {active: false};
    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({active: !this.state.active});
  }

  render() {
    let skill = this.props.skill;
    let active = this.state.active;
    return (
      <div className={classnames("skillBlock", { minimized: !active })}>
        <div className="name" onClick={this.toggleState}>
          <span>{skill.getName()}</span>
          <SkillTextBadge render={skill.isUncommonSkill()} renderText='UNCOMMON' />
          <SkillTextBadge render={skill.isModernEra()} renderText='MODERN' />
        </div>
        <div className="description">
          {skill.getDescription()}
        </div>
        <SpecializationComponent isSpecialized={skill.requiresSpecialization()} specializations={skill.getSpecializationExamples()} />
        <SkillPushableComponent isPushable={skill.isPushable()} pushExamples={skill.getPushExamples()} failedPushExamples={skill.getFailedPushExamples()} />
      </div>
    )
  }
}

export default Skill;
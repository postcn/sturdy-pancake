import React from 'react';
import SkillTextBadge from './SkillTextBadge.jsx';
import SkillPushableComponent from './SkillPushableComponent.jsx';
import SpecializationComponent from './SpecializationComponent.jsx';
import style from '../../css/skill.scss';

function Skill(props) {
  let skill = props.skill;
  return(
    <div className="skillBlock">
        <div className="name">
          <span>{skill.getName()}</span>
          <SkillTextBadge render={skill.isUncommonSkill()} renderText='UNCOMMON'/>
          <SkillTextBadge render={skill.isModernEra()} renderText='MODERN'/>
        </div>
        <div className="description">
          {skill.getDescription()}
        </div>
        <SpecializationComponent isSpecialized={skill.requiresSpecialization()} specializations={skill.getSpecializationExamples()} />
        <SkillPushableComponent isPushable={skill.isPushable()} pushExamples={skill.getPushExamples()} failedPushExamples={skill.getFailedPushExamples()} />
    </div>
  )
}

export default Skill;

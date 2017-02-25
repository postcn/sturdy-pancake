import React from 'react';
import RegisteredSkills from '../resources/skills/RegisteredSkills.js';
import Skill from './Skill.jsx'

function SkillsList(props) {
  let skills = RegisteredSkills.skills.map(function (skill) {
    return(
      <li key={skill.getName()}>
        <Skill skill={skill} />
      </li>
    )
  });
  return <ul>{skills}</ul>
}

export default SkillsList;

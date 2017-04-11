import React from 'react';
import RegisteredSkills from '../../shared/skills/RegisteredSkills';
import Skill from './Skill'

class SkillsList extends React.Component {
  render() {
    const skills = RegisteredSkills.skills.map((skill) => {
      return (
        <li className="list-group-item" key={skill.getName()}>
          <Skill skill={skill} />
        </li>
      );
    });
    return <ul className="list-group">{skills}</ul>
  }
}

export default SkillsList;

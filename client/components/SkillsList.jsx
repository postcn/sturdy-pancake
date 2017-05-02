import React from 'react';
import RegisteredSkills from '../../shared/skills/RegisteredSkills';
import Skill from './Skill'

class SkillsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showUncommon: true,
      showModern: true,
      filterText: ''
    };

    this.filterFunc = this.filterFunc.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  filterFunc(skill) {
    let uncommon = !skill.isUncommonSkill() || this.state.showUncommon;
    let modern = !skill.isModernEra() || this.state.showModern;
    let matchesText = this.state.filterText.length == 0 || skill.getName().toLowerCase().includes(this.state.filterText.toLowerCase());
    return modern && uncommon && matchesText;
  }

  onInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const skills = RegisteredSkills.skills.filter(this.filterFunc).map((skill) => {
      return (
        <li className="list-group-item" key={skill.getName()}>
          <Skill skill={skill} />
        </li>
      );
    });

    return(
      <div>
        <form>
          <label>Filter: <input type="text" name="filterText" value={this.state.filterText} onChange={this.onInputChange}/></label>
          <label>Show Uncommon: <input type="checkbox" name="showUncommon" checked={this.state.showUncommon} onChange={this.onInputChange} /></label>
          <label>Show Modern: <input type="checkbox" name="showModern" checked={this.state.showModern} onChange={this.onInputChange} /></label>
        </form>
        <ul className="list-group">{skills}</ul>
      </div>
    );
  }
}

export default SkillsList;

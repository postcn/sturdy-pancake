import Skill from '../Skill.js';
import Commonality from '../Commonality.js';

import description from './descriptions/Artillery.md';

class Artillery extends Skill {
  getName() {
    return "Artillery";
  }

  getDescription() {
    return description;
  }

  getBaseSuccessPercent(investigator) {
    return 1;
  }

  isPushable() {
    return false;
  }

  getCommonality() {
    return Commonality.UNCOMMON;
  }
}

export default Artillery;

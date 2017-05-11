import Skill from '../Skill.js';

import description from './descriptions/Anthropology.md';

class Anthropology extends Skill {
  getName() {
    return "Anthropology";
  }

  getDescription() {
    return description;
  }

  getBaseSuccessPercent(investigator) {
    return 1;
  }

  getPushExamples() {
    return [
      "taking more tiem to study the target/s",
      "going 'native' for a period",
      "taking an active role in a ceremony, rite, etc."
    ];
  }

  getFailedPushExamples() {
    return [
      "being attacked or imprisoned by the people studied, due to some perceived " +
      "transgression of their laws or social mores",
      "suffering severe side effects as the result of being involved in a " +
      "ceremony which involved ingesting psycotropic plants",
      "an insane investigator failing a pushed roll will be lost among the culture " +
      "being studied"
    ];
  }
}

export default Anthropology;

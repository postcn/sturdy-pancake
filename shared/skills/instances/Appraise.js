import Skill from '../Skill.js';

import description from './descriptions/Appraise.md';

class Appraise extends Skill {
  getName() {
    return "Appraise";
  }

  getDescription() {
    return description;
  }

  getBaseSuccessPercent() {
    return function (investigator) {
      return 5;
    }
  }

  getPushExamples() {
    return [
      "checking an item's validity with another expert",
      "conducting testing",
      "researching an item"
    ];
  }

  getFailedPushExamples() {
    return [
      "accidentally ruining the item in question",
      "bringing the item to the attention of other people, leading to its theft",
      "activating whatever function the item might serve",
      "An insane investigator failing a push could destroy the item, believing " +
      "it to be cursed. Alternatively, they may regard the item as their personal " +
      "salvation and refuse to give it up to anyone else."
    ];
  }
}

export default Appraise;

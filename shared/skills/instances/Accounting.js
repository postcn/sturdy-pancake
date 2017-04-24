import Skill from '../Skill.js';
import description from './descriptions/Accounting.md';

class Accounting extends Skill {
  getName() {
    return "Accounting";
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
      "taking more time to review documents",
      "visiting banks or businesses to validate findings",
      "double checking the math and data"
    ];
  }

  getFailedPushExamples() {
    return [
      "discussions between investigators and third parties alert some enemy faction " +
      "to the investigator's intentions",
      "a vital part of the accounts is destroyed or lost (perhaps in their tired "+
      "state the investigator spills coffee on them)",
      "An insane investigator failing a pushed roll might be found to have partially " +
      "eaten the accounts"
    ];
  }
}

export default Accounting;

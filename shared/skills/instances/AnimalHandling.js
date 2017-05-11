import Skill from '../Skill.js';
import Commonality from '../Commonality.js';

import description from './descriptions/AnimalHandling.md';

class AnimalHandling extends Skill {
  getName() {
    return "Animal Handling";
  }

  getDescription() {
    return description;
  }

  getBaseSuccessPercent(investigator) {
    return 5;
  }

  getPushExamples() {
    return [
      "taking greater personal risk, in terms oof getting closer to or directly " +
      "handling the animal."
    ]
  }

  getFailedPushExamples() {
    return [
      "the animal attacks the trainer or someone else nearby, most likely causing damage",
      "the animal escapes",
      "an insane investigator failing a pushed roll may find themselves behaving " +
      "like the animal they were trying to control"
    ]
  }

  getCommonality() {
    return Commonality.UNCOMMON;
  }
}

export default AnimalHandling;

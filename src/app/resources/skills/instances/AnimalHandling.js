import Skill from '../Skill.js';
import Commonality from '../Commonality.js';

class AnimalHandling extends Skill {
  getName() {
    return "Animal Handling";
  }

  getDescription() {
    return (
    "The ability to command and train domesticated animals to perform simple " +
    "tasks. The skill is most commonly applied to dogs but may include birds, " +
    "cats, monkeys, and so on (at the Keeper's discretion). For riding animals, " +
    "such as horses or camels, the Ride skill is used for breaking-in and controlling " +
    "such mounts."
    );
  }

  getBaseSuccessPercent() {
    return function (investigator) {
      return 5;
    }
  }

  getPushExamples() {
    return [
      "taking greater personal risk, in terms oof getting closer to or directly "+
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

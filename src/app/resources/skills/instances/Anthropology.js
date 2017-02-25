import Skill from '../Skill.js';

class Anthropology extends Skill {
  getName() {
    return "Anthropology";
  }

  getDescription() {
    return(
      "Enables the user to identify and understand an individual's way of life " +
      "through observation. If the skill-user observes another culture from " +
      "within for a time, or works from accurate records concerning an extinct " +
      "culture, then simple predictions can be made about that culture's ways " +
      "and morals, even though the evidence may be incomplete. Studying the " +
      "culture for a month or more, the anthropologist begins to understand how" +
      "the culture functions and, in combination with Psychology, may predict " +
      "the actions and beliefs of those being studied"
    );
  }

  getBaseSuccessPercent() {
    return function (investigator) {
      return 1;
    }
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

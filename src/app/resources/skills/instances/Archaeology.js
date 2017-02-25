import Skill from '../Skill.js';

class Archaeology extends Skill {
  getName() {
    return "Archaeology";
  }

  getDescription() {
    return (
      "Allows dating and identification of artifacts from past cultures, and " +
      "the detection of fakes. Ensures expertise in setting up and excavating " +
      "a dig site. On inspecting a site, the user might deduce the purposes and " +
      "way of life of those who left the remains. Anthropology might aid in this. "+
      "Archaeology also helps identify the written forms of extinct human languages."
    );
  }

  getBaseSuccessPercent() {
    return function (investigator) {
      return 1;
    };
  }

  getPushExamples() {
    return [
      "taking more time to study the site or item",
      "conducting further research",
      "consulting another expert"
    ];
  }

  getFailedPushExamples() {
    return [
      "the site was spoiled, with finds ruined through incompetence, vandalism, " +
      "or theft",
      "some higher authority seizes the site or the finds from your control",
      "publicity leads to the finds being stolen",
      "an insane investigator failing a roll may find themselves digging deeper " +
      "and deeper, ever deeper - the truth is down there somewhere"
    ];
  }
}

export default Archaeology;

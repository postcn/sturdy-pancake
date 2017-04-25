import Era from '../Era.js';
import Specialization from './Specialization.js';
import Commonality from './Commonality.js';

class Skill {

  getName() {
    return "This skill has no name";
  }

  getDescription() {
    return "This skill has no description";
  }

  getBaseSuccessPercent() {
    //References the investigator so we take it as an argument
    return function (investigator) {
      return 0;
    };
  }

  isPushable() {
    return true;
  }

  getPushExamples() {
    return ["This skill has no push examples"];
  }

  getFailedPushExamples() {
    return ["This skill has no failed push examples"];
  }

  isModernEra() {
    return this.getEra() === Era.MODERN;
  }

  getEra() {
    return Era.COMMON;
  }

  requiresSpecialization() {
    return false;
  }

  getSpecializationExamples() {
    return [Specialization.NONE];
  }

  isUncommonSkill() {
    return this.getCommonality() === Commonality.UNCOMMON;
  }

  getCommonality() {
    return Commonality.COMMON;
  }
}

export default Skill;

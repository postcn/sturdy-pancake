import Skill from '../Skill.js';
import Commonality from '../Commonality.js';

class Artillery extends Skill {
  getName() {
    return "Artillery";
  }

  getDescription() {
    return (
      "This skill assumes some form of military training and experience. The " +
      "user is experienced in the operation of field weapons in warfare, able " +
      "to work in a crew or detachment to operate the projection of munitions " +
      "beyond the range of personal weapons. Many weapons of this nature are too " +
      "large for a single person to operate, and either an individual cannot " +
      "use the weapon without a crew or the difficulty level should be raised " +
      "(at the Keeper's discretion dependent on the type of weapon employed.) "+
      "Various specializations exist, depending on the period setting of the game " +
      "including cannon, howitzer, mortar, and rocket launcher."
    );
  }

  getBaseSuccessPercent() {
    return function (investigator) {
      return 1;
    }
  }

  isPushable() {
    return false;
  }

  getCommonality() {
    return Commonality.UNCOMMON;
  }
}

export default Artillery;

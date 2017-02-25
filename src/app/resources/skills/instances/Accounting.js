import Skill from '../Skill.js';

class Accounting extends Skill {
  getName() {
    return "Accounting";
  }

  getDescription() {
    return (
    "Grants understanding of accountancy procedures and reveals the financial " +
    "functioning of a business or person. Inspecting the books, one might detect " +
    "cheated employees, siphoned-off funds, payment of bribes or blackmail, and " +
    "whether the financial condition is better or worse than claimed. Looking " +
    "through old accounts, one could see how money was gained or lost in the past " +
    "(grain, slave-trading, whiskey-running, etc.) and to whom and for what " +
    "payment was made.");
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

import Skill from '../Skill.js';
import Specialization from '../Specialization.js';

class ArtAndCraft extends Skill {

  getName() {
    return "Art and Craft";
  }

  getDescription() {
    return (
      "The generic Art and Craft skill cannot be purchased. A specialization " +
      "enables the making or repair of items, something typically requiring " +
      "equipment and time, to be determined by the Keeper if necessary. " +
      "Higher levels of success may indicate a higher quality or precision item. " +
      "An art or craft skill may be used to make a duplicate or fake item. In such " +
      "a case, the difficulty level would depend on the intricacy and " +
      "distinctiveness of the original to be copied. A successful roll might " +
      "provide information about an item, such as where or when it might have" +
      "been made, some point of history or technique concerning it, or who might " +
      "have made it. The holder of a specialization would have a breadth of " +
      "knowledge within a particular field - knowledge of the subject, it's " +
      "history and contemporary practitioners, as well as the ability to " +
      "perform it."
    );
  }

  getBaseSuccessPercent() {
    return function (investigator) {
      return 5;
    }
  }

  getPushExamples() {
    return [
      "reworking the object, piece, or composition from scratch",
      "conducting further research",
      "checking with another expert"
    ];
  }

  getFailedPushExamples() {
    return [
      "a vast amount of time and money is wasted in creating a failed attempt",
      "the audience or customer is highly offended or physically injured " +
      "by some aspect of your work",
      "the critics slam your work and no one desires your service any longer",
      "an insane investigator who fails a pushed roll creates a transgressive " +
      "work that shocks and causes violent reactions in the viewer - perhaps " +
      "only the most decadent could appreciate it."
    ];
  }

  requiresSpecialization() {
    return true;
  }

  getSpecializationExamples() {
    return [
      new Specialization("Acting", "The artist is accomplished in the art of painting (oils, acrylic, watercolor), as well as sketching in pencil, crayon, or pastels. While serious works of art might take many days or months to complete, the artis may quickly sketch accurate impressions, objects, and people. The skill also denotes a familiarity with the art world, and the artist may be able to determine a particular artist's work, their school, and known history"),
      new Specialization("Forgery", "Adept at fine details, the user can produce high quality fake documents, be it a person's handwriting, a bureaucratic form or permit, or a duplicate of a tome. The forger will require suitable materials (inks, grades of paper, etc.) as well as an original from which to copy. A successful roll indicates the forgery will pass a normal, cursory, inspection. Someone spending time and thoroughly examining the forgery would use the Appraise skill (opposed by the forger's skill) when determing if the fake can be spotted."),
      new Specialization("Photography", "Covers both still and motion photography. This skill allows one to take clear pictures, develop them properly, and enhance half-hidden detail. In the 1920s the user is able to prepar the necessary chemicals to make flashpowder (see Dangerous Photography). In the present day, the skill extends to cover video cameras, video playback equipment, digital photography, and digital editing, where hte user is adept at the manipulation of digital images. Radically different versions can be created from an original source, such as changing the location of a person in a photograph, who they are with, and what they are doing. These proficient may also be able to detect when an image has been manipulated. Regular snapshots do not require a skill roll. Rolls would be required to achieve effective candid photographs, or shots that capture fine detail - espescially at long range, at speed, or in low light. This skill can also allow the investigator to determine if a photograph has been tampered with or fabricated, as well as the angle and position from which the photograph was taken.")
    ];
  }
}

export default ArtAndCraft;

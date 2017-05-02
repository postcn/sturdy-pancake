import Skill from '../Skill';
import description from './descriptions/FirstAid.md';

class FirstAid extends Skill {

    getName() {
        return "First Aid";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 30;
        }
    }

    getPushExamples() {
        return [
            "taking longer to treat the patient",
            "employing high risk methods to stabilize the wound"
        ];
    }

    getFailedPushExamples() {
        return [
            "make things worse, causing additional damage",
            "an insane investigator failing a roll may feel compelled to 'heal' the person, even if it means amputation or worse. In effect, their endeavors constitute physical attacks that may lead to murder if they are not stopped"
        ];
    }

}

export default FirstAid;
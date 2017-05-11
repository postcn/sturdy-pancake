import Skill from '../Skill';
import description from './descriptions/DriveAuto.md';

class DriveAuto extends Skill {

    getName() {
        return "Drive Auto";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 20;
    }

    getPushExamples() {
        return [
            "driving the vehicle to its limit",
            "not slowing down, regardless of the risk"
        ];
    }

    getFailedPushExamples() {
        return [
            "crashing",
            "skidding to a halt, unable to proceed",
            "being seen and pursued by the police",
            "an insane investigator failing a pushed roll may be found behind the wheel of a stationary vehicle making 'brum-brum' noises"
        ];
    }
}

export default DriveAuto;
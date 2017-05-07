import Skill from '../Skill';
import description from './descriptions/MechanicalRepair.md';

class MechanicalRepair extends Skill {

    getName() {
        return "Mechanical Repair";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 10;
        }
    }

    getPushExamples() {
        return [
            "completely dismantling the device",
            "taking longer",
            "risk using excessive force to 'knock' the device into action (e.g. hitting the thing until it works"
        ];
    }

    getFailedPushExamples() {
        return [
            "you have broken the device beyond repair",
            "you have hurt yourself while working on the device (perhaps cutting your hand, etc.)",
            "you become obsessed with the device and find you have spent the wholle day and night working on it"
        ];
    }
}

export default MechanicalRepair;
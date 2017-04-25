import Skill from '../Skill';
import description from './descriptions/ElectricalRepair.md';

class ElectricalRepair extends Skill {

    getName() {
        return "Electrical Repair";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function(investigator) {
            return 10;
        };
    }

    getPushExamples() {
        return [
            "taking longer to repair or reconfigure the equipment",
            "taking a risky short-cut"
        ];
    }

    getFailedPushExamples() {
        return [
            "take damage from an electric shock",
            "blow the fuses and plunge the building into darkness",
            "wreck the thing you are working on beyond repair",
            "an insane investigator failing a roll may attempt to harness the electrical power of living organisms into the device"
        ];
    }
}

export default ElectricalRepair;
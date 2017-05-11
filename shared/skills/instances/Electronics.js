import Skill from '../Skill';
import Era from '../../Era';
import description from './descriptions/Electronics.md';

class Electronics extends Skill {

    getName() {
        return "Electronics";
    }

    getDescription() {
        return description;
    }

    getEra() {
        return Era.MODERN;
    }

    getBaseSuccessPercent(investigator) {
        return 1;
    }

    getPushExamples() {
        return [
            "taking longer to construct or repair a device",
            "researching new or other methodologies"
        ];
    }

    getFailedPushExamples() {
        return [
            "fry circuitry or other delicate parts",
            "take damage from electric shock",
            "create a device that does something other than what was intended",
            "an insane investigator failing a pushed roll may bcome paranoid, convinced that every item they come across contains electronic bugging devices: the telephone, the television, the refridgerator"
        ];
    }
}

export default Electronics;
import Skill from '../Skill';
import Era from '../../Era';

import description from './descriptions/ComputerUse.md';

class ComputerUse extends Skill {

    getName() {
        return "Computer Use";
    }

    getDescription() {
        return description;
    }

    getEra() {
        return Era.MODERN;
    }

    getPushExamples() {
        return [
            "taking longer to develop a program",
            "using another's code as a shortcut",
            "using untested software (e.g. a virus) to exploit a system"
        ]
    }

    getFailedPushExamples() {
        return [
            "accidentally erasing the sought after files, or even corrupting the whole system",
            "leaving evidence or alerting others through your actions",
            "infesting your own computer/network with a virus",
            "an insane investigator failing a pushed roll may be lost in cyberspace, and " +
            "it will require physical intervention to get the person to stop using the computer " +
            "or look away from the screen" 
        ]
    }
}

export default ComputerUse;
import Skill from '../Skill';
import Era from '../../Era';

class ComputerUse extends Skill {

    getName() {
        return "Computer Use";
    }

    getDescription() {
        return (
            "This skill allows the investigator to program in various " +
            "computer languages, retrieve and analyze obscure data, break " +
            "into a secured system, explore a complicated network, and detect " +
            "or exploit intrusions, back doors, and viruses. Special manipulation " +
            "of a computer system may rquire this roll. The Internet places a wealth " +
            "of information at the fingertips of an investigator. Use of the internet too find " +
            "highly specific or obscure information may rquire a combined " + 
            "dice roll for Computer Use and Library Use. " + "This skill is not needed to use " +
            "computers when surfing the internet, collecting email, or to run regular commerically " +
            "available software."
        );
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
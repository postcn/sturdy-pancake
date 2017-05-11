import Skill from '../Skill';
import Commonality from '../Commonality';
import description from './descriptions/Demolitions.md';

class Demolitions extends Skill {

    getName() {
        return "Demolitions";
    }

    getDescription() {
        return description;
    }

    getPushExamples() {
        return [
            "taking until the very last second to defuse the bomb",
            "double checking all the circuits and connections by hand"
        ];
    }

    getFailedPushExamples() {
        return [
            "if defusing or removing an explosive device, the consequence of failing a roll is clear - it explodes!",
            "if using the Domolitions skill to place charges, the consequence of failing a pushed roll may be a failure to detonate at the right time (or at all), or that the detonation fails to have the desired effect (either too great or too little)",
            "an insane investigator failing a roll my devise the most bizarre method of delivering the explosive, such as strapping it to a cat or themselves."
        ]
    }

    getCommonality() {
        return Commonality.UNCOMMON;
    }

    getBaseSuccessPercent(investigator) {
        return 1;
    }
}

export default Demolitions;
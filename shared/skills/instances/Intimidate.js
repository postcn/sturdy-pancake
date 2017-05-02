import Skill from '../Skill';
import description from './descriptions/Intimidate.md';

class Intimidate extends Skill {

    getName() {
        return "Intimidate";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 15;
        }
    }

    getPushExamples() {
        return [
            "causing actual physical harm to the target or to something or someone that the target cares about"
        ];
    }

    getFailedPushExamples() {
        return [
            "accidentally pulling the trigger of the gun you're waving in the target's face",
            "the target's mind snaps, resulting in violence or inane babbling, after which no more can be gained",
            "the target simply laughs in your face and won't break no matter what you do",
            "the target somehow turns the tables and intimidates the intimidator",
            "an insane investigator failing a pushed roll may find themselves intensely fearful of their target and does their bidding"
        ];
    }

}

export default Intimidate;
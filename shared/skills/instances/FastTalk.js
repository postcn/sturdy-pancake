import Skill from '../Skill';
import description from './descriptions/FastTalk.md';

class FastTalk extends Skill {

    getName() {
        return "Fast Talk";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 5;
        }
    }

    getPushExamples() {
        return [
            "getting up close and personal to the target",
            "talking outlandishly, aiming to confuse the target"
        ];
    }

    getFailedPushExamples() {
        return [
            "cause great offence leading to violence, outrage, or criminal proceedings",
            "an insane investigator failing a pushed roll may find they begin hurling random abusive phrases at people"
        ];
    }
}

export default FastTalk;
import Skill from '../Skill';
import description from './descriptions/Jump.md';

class Jump extends Skill {

    getName() {
        return "Jump";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 20;
        }
    }

    getPushExamples() {
        return [
            "delaying and taking time to assess the jump",
            "throwing all your weight and force behind the jump - really stretching for it",
            "in some instances, a pushed roll is not possible, if one leaps across an abyss, one cannot have a second attempt. However, if one is trapped in a pit and jumping to escape, one could have any number of attemtps, which would then be summarized by one pushed skill roll."
        ];
    }

    getFailedPushExamples() {
        return [
            "fall and suffer physical harm",
            "achieve the jump but a valuable possession (of the Keeper's choice) is dropped in the process",
            "an insane investigator failing a pushed roll will become convinced that they can fly"
        ];
    }
}

export default Jump;
import Skill from '../Skill';
import description from './descriptions/Disguise.md';

class Disguise extends Skill {
    getName() {
        return 'Disguise';
    }

    getDescription() {
        return description;
    }

    getPushExamples() {
        return [
            "undergoing a fully immersive and intensive preparation (losing oneself in the role)",
            "stealing personal items and utilizing them in the disguise",
            "overt exaggeration to confound the target",
            "feigning a sudden attack of illness to disorientate the observer"
        ];
    }

    getFailedPushExamples() {
        return [
            "Being arrested",
            "causing offense, leading to violence or criminal charges",
            "finding that the person being imitated is wanted by a criminal gang who come looking for vengeance",
            "an insane investigator failing a pushed roll may no longer recognize his or her own face in the mirror, even when the disguise is removed"
        ];
    }

    getBaseSucessPercent() {
        return function (investigator) {
            return 5;
        };
    }
}

export default Disguise;
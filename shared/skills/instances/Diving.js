import Skill from '../Skill';
import Commonality from '../Commonality';
import description from './descriptions/Diving.md';

class Diving extends Skill {

    getName() {
        return "Diving";
    }

    getDescription() {
        return description;
    }

    getCommonality() {
        return Commonality.UNCOMMON;
    }

    getPushExamples() {
        return [
            "pushing the limits of the equipment",
            "methodically double-checking the equipment",
            "gaining professional assistance"
        ];
    }

    getFailedPushExamples() {
        return [
            "become trapped underwater",
            "attacked by sea creatures",
            "suffer the bends",
            "an insane investigator failing a pushed roll may begin to understand whale song - all you have to do is follow their instructions"
        ];
    }

    getBaseSuccessPercent(investigator) {
        return 1;
    }

}

export default Diving;
import Skill from '../Skill';
import description from './descriptions/Navigate.md';

class Navigate extends Skill {
    getName() {
        return "Navigate";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 10;
    }

    getPushExamples() {
        return [
            "getting the map out and delaying while you attempt to work out where you are",
            "going back to where you started from and trying again"
        ]
    }

    getFailedPushExamples() {
        return [
            "you get lost and find yourself being watched or ambushed by a bear",
            "you go round and round in circles, and your companions stop following you (you're on your own now...)",
            "you mistake the stars, and rather than getting away from the cultist's search parties, you end up back at the cult's hidden base",
            "an insane investigator failing a pushed roll throws away the map (as happens in the Blair Witch Project) and follows their intuition. Their intuition does not work"
        ]
    }
}

export default Navigate;
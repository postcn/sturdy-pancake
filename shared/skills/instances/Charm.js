import Skill from '../Skill';

import description from './descriptions/Charm.md';

class Charm extends Skill {
    getName() {
        return "Charm";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 15;
    }

    getPushExamples() {
        return [
            "overtly flattering the target with affection",
            "presenting an expensive gift",
            "building trust by imparting a secret"
        ];
    }

    getFailedPushExamples() {
        return [
            "the target takes offence and will have nothing further to do with you",
            "the target is associated in some way with your enemies and, while they may play along with yuo, they also inform on you",
            "a third party intercedes to prevent you from chatting up their girl",
            "an insane investigator who fails a pushed roll may fall head over heels in love " +
            "with their target and will act as if the target successfully uused a Dominate spell upon them"
        ]
    }
}

export default Charm;
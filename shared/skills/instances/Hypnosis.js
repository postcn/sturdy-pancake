import Skill from '../Skill';
import Commonality from '../Commonality';
import description from './descriptions/Hypnosis.md';

class Hypnosis extends Skill {
    getName() {
        return "Hypnosis";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function(investigator) {
            return 1;
        }
    }

    getCommonality() {
        return Commonality.UNCOMMON;
    }

    getPushExamples() {
        return [
            "increasing your influence on the target by ensuring their full and undivided attention",
            "assaulting the target's senses with confusing lights or props",
            "the use of drugs to make the target more susceptible to suggestion"
        ];
    }

    getFailedPushExamples() {
        return [
            "some past memory or trauma is brought to the surface, causing the target 1D6 Sanity Loss",
            "the target falls into a trance, causing them to walk in front of a bus at a later time",
            "the target's mind (or the investigator's mind) is temporarily emptied, allowing possession by a malevolent enemy",
            "an insane investigator failing a pushed roll may find their mind regresses to a childlike state until treatment is administered"
        ];
    }
}

export default Hypnosis;
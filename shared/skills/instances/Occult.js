import Skill from '../Skill';
import description from './descriptions/Occult.md';

class Occult extends Skill {
    getName() {
        return "Occult";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 5;
    }

    getPushExamples() {
        return [
            "taking more time to study the site or item",
            "conducting further research",
            "consulting another expert",
            "purging oneself and undertaking extreme personal preparation in advance of ritual performance"
        ];
    }

    getFailedPushExamples() {
        return [
            "information is misremembered, and the ritual is performed incorrectly with disastrous results (perhaps the house is burned to the ground)",
            "in preparing the circle of protection, you use the wrong ingredients and rather than ward off the spirits you genuinely summon something malevolent",
            "your research has uncovered a hitherto unknown Mythos link, and your realization shatters your min (SAN loss)",
            "an insane investigator failing a roll is likely to manifest some sort of obsession: perhaps the investigator tattoos occult symbols upon his or her cheeks and palms, or cannot act without first using a scrying crystal to divine their future"
        ];
    }
}

export default Occult;
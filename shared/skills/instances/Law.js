import Skill from '../Skill';
import description from './descriptions/Law.md';

class Law extends Skill {

    getName() {
        return "Law";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 5;
    }

    getPushExamples() {
        return [
            "delaying in order to consider your argument",
            "explaining in high detail the nuances of the case/situation",
            "taking significant time to conduct research",
            "bending the letter of the law to drive your argument"
        ];
    }

    getFailedPushExamples() {
        return [
            "mininterpreting a law or stepping outside of the accept legal procedure leads you to break the law and draws police attention",
            "wasting valuable time and money on research and legal fees",
            "you are help in contempt of court and thrown into the cells for at least 24 hours",
            "an insane investigator failing a pushed roll will now believe that he or she is above the law"
        ];
    }

}

export default Law;
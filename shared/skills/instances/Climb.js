import Skill from '../Skill';

import description from './descriptions/Climb.md';

class Climb extends Skill {

    getName() {
        return "Climb";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 20;
    }

    getPushExamples() {
        return [
            "reassessing the climb",
            "taking a longer route",
            "straining one's reach"
        ]
    }

    getFailedPushExamples() {
        return [
            "fall and suffer damage (1D6 damage per ten feet onto grass, or " +
            "1D10 damage per 10 feet onto concrete)",
            "lose a valuable possession as it falls from your pocket (you may " +
            "not notice this until later)",
            "become stranded, unable to go up or down",
            "an insane investigator who fails a pushed roll may hold on for dear life " +
            "and scream at the top of their lungs for as long as they can"
        ]
    }
}

export default Climb;
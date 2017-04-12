import Skill from '../Skill';

class Climb extends Skill {

    getName() {
        return "Climb";
    }

    getDescription() {
        return(
            "This skill allows a character to climb trees, walls, and other " + 
            "vertical surfaces with or without climbing gear. This skill also " +
            "encompasses rapelling. Conditions, such as firmness of surface, " +
            "available handholds, wind, visibility, rain, etc., may all affect " +
            "the difficulty level. Failing this skill on the first roll indicates " +
            "that the climb is perhaps beyond the investigator's capability. " +
            "Failing a pushed roll is likely to indicate a fall with resultant damage. "  +
            "One successful Climb roll should allow the investigator to complete the " +
            "climb in almost all cases (rather than requiring repeated rolls). A " + 
            "challenging or longer climb should have an increased difficulty level."
        );
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 20;
        }
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
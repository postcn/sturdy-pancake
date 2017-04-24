import Skill from '../Skill';
import description from './descriptions/CthulhuMythos.md';

class CthulhuMythos extends Skill {

    getName() {
        return "Cthulhu Mythos";
    }

    getDescription() {
        return description;
    }

    getPushExamples() {
        return [
            "getting closer to the creature for a better view",
            "consulting dread tomes or lore of humans (or otherwise) possessing specialist knowledge",
            "conducting an autopsy to learn more",
            "reading alound as you retrace the strange cryptograms"
        ]
    }

    getFailedPushExamples() {
        return [
            "get too close",
            "exposing oneself to harm or suspicion",
            "unwittingly read aloud a passage from a tome that activates a summoning spell",
            "accidentally corrupt or destroy the evidence being studied",
            "an insane investigator who fails a pushed roll may find they experience a vision " +
            "or revelation that reveals new truths about the Cthulhu Mythos"
        ]
    }
}

export default CthulhuMythos;
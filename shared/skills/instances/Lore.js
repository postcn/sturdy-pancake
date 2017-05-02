import Skill from '../Skill';
import Specialization from '../Specialization';
import description from './descriptions/Lore.md';

class Lore extends Skill {

    getName() {
        return "Lore";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 1;
        }
    }

    requiresSpecialization() {
        return true;
    }

    getSpecializationExamples() {
        return [
            new Specialization("Dream Lore", "The investigator knows about dreams and interpreting them."),
            new Specialization("Necronomicon (History of) Lore", "The investigator knows about the history of the necronomicon and the mad arab."),
            new Specialization("UFO Lore", "concerning the history and existence of UFOs"),
            new Specialization("Vampire Lore", "not the sparkly kind. the more impressive kind"),
            new Specialization("Werewolf Lore", "knowledge about werewolves"),
            new Specialization("Yaddithian Lore", "lore concerning the Yaddithian race, intelligent alien createurs with a clawed and snouted appearance")
        ];
    }

}

export default Lore;
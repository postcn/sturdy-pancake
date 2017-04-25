import Skill from '../Skill';
import Specialization from '../Specialization';
import description from './descriptions/Fighting.md';

class Fighting extends Skill {
    getName() {
        return "Fighting";
    }

    getDescription() {
        return description;
    }

    isPushable() {
        return false;
    }

    requiresSpecialization() {
        return true;
    }

    getSpecializationExamples() {
        return [
            new Specialization("Axe", "use this skill for larger wood axes. A small hatchet can be used with basic brawling skill. If thrown, use the Throw skill.", 15),
            new Specialization("Brawl", "Includes all unarmed fighting and basic weapons that anyone could pick up and make use of such as clubs (up to cricket bats or baseball bats), knives, and may improvised weapons such as bottles and chair legs. To determine the damage done with an improvised weapon, the Keeper should refer to the weapons list and pick something comparable", 25),
            new Specialization("Chainsaw", "the first gasoline powered, mass produced chainsaw appeared in 1927, however, earlier versions existed", 10),
            new Specialization("Flail", "nunchaku, morning stars, and similar medieval weapons", 10),
            new Specialization("Garrote", "any length of material used to strangle. Requires the victim to make a Fighting Maneuver to escape, or suffer 1D6 damage per round", 15),
            new Specialization("Spear", "lances and spears. If thrown use Throw skill", 20),
            new Specialization("Sword", "all blades over two feet in length", 20),
            new Specialization("Whip", "bolas and whips", 5)
        ];
    }
}

export default Fighting;
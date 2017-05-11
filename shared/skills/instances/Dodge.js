import Skill from '../Skill';
import description from './descriptions/Dodge.md';

class Dodge extends Skill {

    getName() {
        return "Dodge";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return investigator.dex / 2;
    }

    isPushable() {
        return false;
    }
}

export default Dodge;
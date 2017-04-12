import Skill from '../Skill';
import description from './descriptions/CthulhuMythos.txt';

class CthulhuMythos extends Skill {

    getName() {
        return "Cthulhu Mythos";
    }

    getDescription() {
        return description;
    }
}

export default CthulhuMythos;
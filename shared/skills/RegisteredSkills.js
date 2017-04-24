import Accounting from './instances/Accounting.js';
import AnimalHandling from './instances/AnimalHandling.js';
import Anthropology from './instances/Anthropology.js';
import Appraise from './instances/Appraise.js';
import Archaeology from './instances/Archaeology.js';
import ArtAndCraft from './instances/ArtAndCraft.js';
import Artillery from './instances/Artillery.js';
import Charm from './instances/Charm';
import Climb from './instances/Climb';
import ComputerUse from './instances/ComputerUse';
import CreditRating from './instances/CreditRating';
import CthulhuMythos from './instances/CthulhuMythos';
import LanguageOther from './instances/LanguageOther';

class RegisteredSkills {
  static get skills() {
    return [
      new Accounting(),
      new AnimalHandling(),
      new Anthropology(),
      new Appraise(),
      new Archaeology(),
      new ArtAndCraft(),
      new Artillery(),
      new Charm(),
      new Climb(),
      new ComputerUse(),
      new CreditRating(),
      new CthulhuMythos(),
      new LanguageOther()
    ];
  }
}

export default RegisteredSkills;

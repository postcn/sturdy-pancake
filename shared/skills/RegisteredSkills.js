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
import Demolitions from './instances/Demolitions';
import Disguise from './instances/Disguise';
import Diving from './instances/Diving';
import Dodge from './instances/Dodge';
import DriveAuto from './instances/DriveAuto';
import ElectricalRepair from './instances/ElectricalRepair';
import Electronics from './instances/Electronics';
import FastTalk from './instances/FastTalk';
import Fighting from './instances/Fighting';
import Firearms from './instances/Firearms';

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
      new Demolitions(),
      new Disguise(),
      new Diving(),
      new Dodge(),
      new DriveAuto(),
      new ElectricalRepair(),
      new Electronics(),
      new FastTalk(),
      new Fighting(),
      new Firearms(),
      new LanguageOther()
    ];
  }
}

export default RegisteredSkills;

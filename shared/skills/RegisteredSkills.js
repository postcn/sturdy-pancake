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
import FirstAid from './instances/FirstAid';
import History from './instances/History';
import Hypnosis from './instances/Hypnosis';
import Intimidate from './instances/Intimidate';
import Jump from './instances/Jump';
import LanguageOwn from './instances/LanguageOwn';
import LanguageOther from './instances/LanguageOther';
import Law from './instances/Law';
import LibraryUse from './instances/LibraryUse';
import Lore from './instances/Lore';
import MechanicalRepair from './instances/MechanicalRepair';
import Medicine from './instances/Medicine';
import NaturalWorld from './instances/NaturalWorld';
import Navigate from './instances/Navigate';
import Occult from './instances/Occult';

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
      new FirstAid(),
      new History(),
      new Hypnosis(),
      new Intimidate(),
      new Jump(),
      new LanguageOther(),
      new LanguageOwn(),
      new Law(),
      new LibraryUse(),
      new Lore(),
      new MechanicalRepair(),
      new Medicine(),
      new NaturalWorld(),
      new Navigate(),
      new Occult()
    ];
  }
}

export default RegisteredSkills;

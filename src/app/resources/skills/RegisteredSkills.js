import Accounting from './instances/Accounting.js';
import AnimalHandling from './instances/AnimalHandling.js';
import Anthropology from './instances/Anthropology.js';
import Appraise from './instances/Appraise.js';
import Archaeology from './instances/Archaeology.js';
import ArtAndCraft from './instances/ArtAndCraft.js';
import Artillery from './instances/Artillery.js';

class RegisteredSkills {
  static get skills() {
    return [
      new Accounting(),
      new AnimalHandling(),
      new Anthropology(),
      new Appraise(),
      new Archaeology(),
      new ArtAndCraft(),
      new Artillery()
    ];
  }
}

export default RegisteredSkills;

class SkillLevel {
  constructor(name, description) {
    this._name = name;
    this._description = description;
  }

  static getSkillLevel(skillScore) {
    if (skillScore < 6) {
      return new Novice();
    }
    else if (skillScore < 20) {
      return new Neophyte();
    }
    else if (skillScore < 50) {
      return new Amateur();
    }
    else if (skillScore < 75) {
      return new Professional();
    }
    else if (skillScore < 90) {
      return new Expert();
    }
    else {
      return new Master();
    }
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }
}

class Novice extends SkillLevel {
  constructor() {
    super("Novice", "Complete Amateur");
  }
}

class Neophyte extends SkillLevel {
  constructor() {
    super("Neophyte", "Beginner with a small amount of knowledge.");
  }
}

class Amateur extends SkillLevel {
  constructor() {
    super("Amateur", "Possesses some talent or rudimentary training, hobby level.");
  }
}

class Professional extends SkillLevel {
  constructor() {
    super("Professional", "Allows a character to eke out a living from the skill. Equivalent to a bachelor's degree in a specific subject.");
  }
}

class Expert extends SkillLevel {
  constructor() {
    super("Expert", "Advanced expertise. Corresponds with a master's degree or PHD.");
  }
}

class Master extends SkillLevel {
  constructor() {
    super("Master", "Among the world's best in the skill");
  }
}

export default SkillLevel;

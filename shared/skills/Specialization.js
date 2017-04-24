class Specialization {
  constructor(name, description, startingPercentage) {
    this._name = name;
    this._description = description;
    this._startingPercentage = startingPercentage;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get startingPercentage() {
    return this._startingPercentage;
  }

  static get NONE() {
    return new Specialization("None", "No specialization for this skill", 0);
  }
}

export default Specialization;

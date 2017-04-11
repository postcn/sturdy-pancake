class Specialization {
  constructor(name, description) {
    this._name = name;
    this._description = description;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  static get NONE() {
    return new Specialization("None", "No specialization for this skill");
  }
}

export default Specialization;

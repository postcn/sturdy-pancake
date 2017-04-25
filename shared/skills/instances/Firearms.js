import Skill from '../Skill';
import Specialization from '../Specialization';
import description from './descriptions/Firearms.md';

class Firearms extends Skill {
    getName() {
        return "Firearms";
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
            new Specialization("Bow", "use of bows and crossbows, ranging from medieval longbows to modern, high powered compound bows", 15),
            new Specialization("Handgun", "use for all pistol like firearms when firing discrete shots. For machine pistols (MAC-11, Uzi, etc.) in modern era games, use the Submachine Gun skill when firing bursts", 20),
            new Specialization("Heavy Weapons", "use for grenade launchers, anti-tank rockets, etc.", 10),
            new Specialization("Flamethrower", "weapons projecting a stream of ignited flammable liquid or gas, may either be carried by the operator or mounted on a vehicle", 10),
            new Specialization("Machine Gun", "weapons firing bursts from bipods, tripods, and mounted weapons. If single shots are fired from a bipod, use the Rifle skill. The differences between assault rifle, submachine gun, and light machine gun are tenuous today.", 10),
            new Specialization("Rifle/Shotgun", "with this skill any type of rifle (whether lever-action, bolt-action, or semi-automatic) or scatter-gun can be fired. Since the load from a shotgun expands in a spreading pattern, the user's chance to hit does not decrease with range, but the damage dealt dows. When an assualt rifle fires a single shot (or multiple singles) use this skill", 25),
            new Specialization("Submachine Gun", "use this skill when firing any machine pistol or submachine gun, also for assault rifles set on burst or full automatic fire", 15)
        ]
    }
}

export default Firearms;
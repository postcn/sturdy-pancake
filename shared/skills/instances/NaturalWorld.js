import Skill from '../Skill';
import description from './descriptions/NaturalWorld.md';

class NaturalWorld extends Skill {
    getName() {
        return "Natural World";
    }

    getDescription() { 
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 10;
    }

    getPushExamples() {
        return [
            "spending much longer (forgetful of the time) examining the habitat",
            "tasting the unknown mushroom or plant to get a better idea of what it is",
            "consulting with the old woman in the village about the local wildlife"
        ];
    }

    getFailedPushExamples() {
        return [
            "you spend long hours obsessively pouring over books to identify the species",
            "you get the facts wrong, and instead of the wasps being repelled by your concoction of swap mud and herbs, they are drawn to you (with painful results)",
            "you picked the wrong mushroom, and find your self hours later walking naked towards a policeman",
            "an insane investigator failing a pushed roll will go native and be lost in the wilderness until friends come to his aid"
        ]
    }
}

export default NaturalWorld;
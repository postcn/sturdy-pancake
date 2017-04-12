import Skill from '../Skill';

class Charm extends Skill {
    getName() {
        return "Charm";
    }

    getDescription() {
        return (
            "Charm takes many forms, including physical attraction, seduction, " +
            "flattery, or simply warmth of personality. Charm may be used to " +
            "compel someone to act in a certain way, but not in a manner completely " +
            "contrary to that person's normal behavior. Charm is opposed by the Charm " +
            "or Psychology skills. Charm may be used for bargaining, to haggle " +
            "the price of an item or service down. If successful, the seller is won over " +
            "and they may well reduce the price a little. "+
            "Remember this about being charming: if the investigator begins to take a different" +
            "approach, the Keeper may ask for a different skill to be used; if threats are used " +
            "it may become Intimidation; or if a protacted discussion ensues, it may " +
            "become Persuasion. Switching from one to the other to gain a second roll " +
            "still constitutes a pushed roll."
        );
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 15;
        }
    }

    getPushExamples() {
        return [
            "overtly flattering the target with affection",
            "presenting an expensive gift",
            "building trust by imparting a secret"
        ];
    }

    getFailedPushExamples() {
        return [
            "the target takes offence and will have nothing further to do with you",
            "the target is associated in some way with your enemies and, while they may play along with yuo, they also inform on you",
            "a third party intercedes to prevent you from chatting up their girl",
            "an insane investigator who fails a pushed roll may fall head over heels in love " +
            "with their target and will act as if the target successfully uused a Dominate spell upon them"
        ]
    }
}

export default Charm;
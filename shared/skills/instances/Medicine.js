import Skill from '../Skill';
import description from './descriptions/Medicine.md';

class Medicine extends Skill {
    getName() {
        return "Medicine";
    }

    getDescription() {
        return description;
    }

    getPushExamples() {
        return [
            "consulting with colleauges",
            "conducting further research",
            "trying something experimental or more risky",
            "performing some form of clinical experiment"
        ];
    }

    getFailedPushExamples() {
        return [
            "you misdiagnose the ailment and you worsen the patient's condition (perhaps even killing them)",
            "your good standing comes into question and you are investigated for malpractice",
            "in the case of a dying character, if a pushed Medicine roll is failed, the patient dies",
            "an insane investigator failing a pushed roll may find the results to be disturbing in the extreme, perhaps involving amputation or blood poisoning as a result of failed attemtps to graft animal parts onto the person"
        ]
    }

    getBaseSuccessPercent(investigator) {
        return 1;
    }
}

export default Medicine;
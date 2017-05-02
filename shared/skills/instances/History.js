import Skill from '../Skill';
import description from './descriptions/History.md';

class History extends Skill {
    getName() {
        return "History";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 5;
        }
    }

    getPushExamples() {
        return [
            "taking more time to examine",
            "conducting further research",
            "consulting another expert",
            "hiring assistants to conduct detailed research",
            "taking months, and at a huge cost"
        ];
    }

    getFailedPushExamples() {
        return [
            "consultations alert your adversaries, who become aware of your intent",
            "your facts are erroneous and lead you into danger",
            "much time and money is wasted on fruitless research",
            "an insane investigator failing a roll may be convinced they are somehow displaced in time, or perhpaps they start believing they are living in a historic period, dressing and speaking in an archaic manner"
        ];
    }
}

export default History;
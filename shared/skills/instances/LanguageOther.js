import Skill from '../Skill';
import Specialization from '../Specialization';
import description from './descriptions/LanguageOther.md';

class LanguageOther extends Skill {
    getName() {
        return "Language, Other (Specializations)";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent(investigator) {
        return 1;
    }

    getPushExamples() {
        return [
            "taking longer to think through the words you want to say",
            "taking long pauses to answer what you have been told",
            "referencing other books to make a translation"
        ];
    }

    getFailedPushExamples() {
        return [
            "exaggerated or loud discussions between investigators and third parties alert some enemy faction to the investigator's intentions",
            "a word or phrase is misunderstood (perhaps the meaning is reversed)",
            "the listener takes offense to an unintentional slur, and they respond with their fists, or turn everyone in the neighborhood against you.",
            "an insane investigator failing a pushed roll may begin to speak in tongues, or imagines they are using the Enochian language."
        ]
    }

    requiresSpecialization() {
        return true;
    }

    getSpecializationExamples() {
        return [
            new Specialization("French", "Able to speak the french language"),
            new Specialization("German", "Able to speak the german language")
        ];
    }
}

export default LanguageOther;
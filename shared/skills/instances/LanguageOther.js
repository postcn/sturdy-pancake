import Skill from '../Skill';
import description from './descriptions/LanguageOther.md';

class LanguageOther extends Skill {
    getName() {
        return "Language, Other (Specializations)";
    }

    getDescription() {
        return description;
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
}

export default LanguageOther;
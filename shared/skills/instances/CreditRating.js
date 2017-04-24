import Skill from '../Skill.js';
import description from './descriptions/CreditRating.md';

class CreditRating extends Skill {

    getName() {
        return "Credit Rating";
    }

    getDescription() {
        return description;
    }

    getPushExamples() {
        return [
            "you offer your house and/or other values to secure money from a loan shark",
            "you attempt to pressure the bank manager into giving you a loan"
        ]
    }

    getFailedPushExamples() {
        return [
            "the loan shark turns nasty and directs his boys to teach you a lesson",
            "the bank manager calls the police",
            "you are loaned the money, but it is a ploy to put you in deeper debt with a mobster who plans to buy out your debt and later call on you for a favor",
            "an insane investigator who fails a pushed roll may find that he loses all faith in capitalism and begins freely handing out his money to passersby"
        ]
    }
}

export default CreditRating;
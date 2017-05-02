import Skill from '../Skill';
import description from './descriptions/LibraryUse.md';

class LibraryUse extends Skill {

    getName() {
        return "Library Use";
    }

    getDescription() {
        return description;
    }

    getBaseSuccessPercent() {
        return function (investigator) {
            return 20;
        }
    }

    getPushExamples() {
        return [
            "pressing the librarian for extensive assistance",
            "taking longer to systematically work through the stacks"
        ];
    }

    getFailedPushExamples() {
        return [
            "finding a similar book containing misleading information which will lead the investigators into danger",
            "entanglement with an adversary - perhaps they are alerted to your research and act against you or they check out the book you are searching for (or simply tear out the pages in question)",
            "getting into an argument with the librarian, resulting in your library membership being revoked",
            "an insane investigator failing a pushed roll hoards books, cutting out pages to stick to their bedroom waall, makign copious bizarre notes, linking the pages with threads of cotton and pins",
            "alternatively, an insane investigator failing a pushed roll may find they spend all their time searching for the \"correct\" book or piece of information, spending all their time pilfering and pouring over books"
        ];
    }

}

export default LibraryUse;
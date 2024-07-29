import Advatages from "./Advantages";
import Contacts from "./Contacts";
import Documents from "./Documents";
import FAQ from "./FAQ";
import Form from "./Form";
import Main from "./Main";
import Reviews from "./Revews";
import Visas from "./Visas";

const Sections: React.FC & {
    Main: typeof Main;
    Advatages: typeof Advatages;
    Visas: typeof Visas;
    Reviews: typeof Reviews;
    Contacts: typeof Contacts;
    Documents: typeof Documents;
    FAQ: typeof FAQ;
    Form: typeof Form;
} = () => {
    return null;
};

Sections.Main = Main;
Sections.Advatages = Advatages;
Sections.Visas = Visas;
Sections.Reviews = Reviews;
Sections.Contacts = Contacts;
Sections.Documents = Documents;
Sections.FAQ = FAQ;
Sections.Form = Form;

export default Sections;
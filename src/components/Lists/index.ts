import Advatages from './Advantages';
import Documents from './Documents';
import FAQ from './FAQ';
import Nav from './Nav';

const Lists: React.FC & {
    Nav: typeof Nav;
    Advatages: typeof Advatages;
    FAQ: typeof FAQ;
    Documents: typeof Documents;
} = () => {
    return null;
};

Lists.Nav = Nav;
Lists.Advatages = Advatages;
Lists.FAQ = FAQ;
Lists.Documents = Documents;

export default Lists;
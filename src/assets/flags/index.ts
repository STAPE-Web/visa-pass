import Spain from "./svg/Spain.svg"
import Croatia from "./svg/Croatia.svg"
import Czech from "./svg/Czech.svg"
import France from "./svg/France.svg"
import Germany from "./svg/Germany.svg"
import Italy from "./svg/Italy.svg"
import Greece from "./svg/Greece.svg"
import Poland from "./svg/Poland.svg"


const Flags: React.FC & {
    Spain: typeof Spain;
    Croatia: typeof Croatia;
    Czech: typeof Czech;
    France: typeof France;
    Germany: typeof Germany;
    Italy: typeof Italy;
    Greece: typeof Greece;
    Poland: typeof Poland;
} = () => {
    return null;
};

Flags.Spain = Spain;
Flags.Croatia = Croatia;
Flags.Czech = Czech;
Flags.France = France;
Flags.Germany = Germany;
Flags.Italy = Italy;
Flags.Greece = Greece;
Flags.Poland = Poland;

export default Flags;
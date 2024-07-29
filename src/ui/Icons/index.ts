import Sheild from "./svg/Sheild";
import Star from "./svg/Star";
import Time from "./svg/Time";
import Verifed from "./svg/Verifed";
import ArrowLeft from "./svg/ArrowLeft";
import ArrowRight from "./svg/ArrowRight";
import ArrowDown from "./svg/ArrowDown";
import Check from "./svg/Check";

const Icons: React.FC & {
    Sheild: typeof Sheild;
    Verifed: typeof Verifed;
    Star: typeof Star;
    Time: typeof Time;
    ArrowLeft: typeof ArrowLeft;
    ArrowRight: typeof ArrowRight;
    ArrowDown: typeof ArrowDown;
    Check: typeof Check;
} = () => {
    return null;
};

Icons.Sheild = Sheild;
Icons.Star = Star;
Icons.Time = Time;
Icons.Verifed = Verifed;
Icons.ArrowLeft = ArrowLeft;
Icons.ArrowRight = ArrowRight;
Icons.ArrowDown = ArrowDown;
Icons.Check = Check;

export default Icons;
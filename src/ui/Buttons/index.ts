import Default from './Default';
import Round from './Round';

const Button: React.FC & {
    Default: typeof Default;
    Round: typeof Round;
} = () => {
    return null;
};

Button.Default = Default;
Button.Round = Round;

export default Button;
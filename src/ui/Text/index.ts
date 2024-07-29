import Title from "./Title";
import Label from "./Label";

const Text: React.FC & {
    Title: typeof Title;
    Label: typeof Label;
} = () => {
    return null;
};

Text.Title = Title;
Text.Label = Label;

export default Text;
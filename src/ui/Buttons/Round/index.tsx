import { FC } from "react";
import styles from "./style.module.css"

interface Props {
    onClick: () => void;
    children: any
    disabled?: boolean
}

const Round: FC<Props> = (props) => {
    return (
        <button {...props} className={styles.Button}>{props.children}</button>
    )
}

export default Round
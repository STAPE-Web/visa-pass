import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    children: any
    text: string
}

const Label: FC<Props> = ({ children, text }) => {
    return (
        <div className={styles.Box}>
            <label className={styles.Text}>{text}</label>
            {children}
        </div>
    )
}

export default Label
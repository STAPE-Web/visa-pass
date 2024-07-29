import { FC } from "react"
import styles from "./style.module.css"

interface Props {
    children: any
}

const Title: FC<Props> = ({ children }) => {
    return (
        <h1 className={styles.Title}>{children}</h1>
    )
}

export default Title
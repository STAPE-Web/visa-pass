import styles from "./style.module.css"
import { FC } from "react"

interface Props {
    value: string
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = (props) => {
    return (
        <input type="text" className={styles.Input} {...props} />
    )
}

export default Input
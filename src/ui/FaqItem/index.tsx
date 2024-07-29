import { FC, useState } from "react"
import styles from "./style.module.css"
import Icons from "../Icons"

interface Props {
    item: {
        question: string
        answer: string
    }
}

const FaqItem: FC<Props> = ({ item }) => {
    const [active, setActive] = useState(false)

    return (
        <div className={styles.Item} onClick={() => setActive(!active)}>
            <div className={styles.Question}>
                <h3>{item.question}</h3>
                <Icons.ArrowDown className={active ? styles.Active : ""} />
            </div>

            {active && <div className={styles.Answer}>{item.answer}</div>}
        </div>
    )
}

export default FaqItem
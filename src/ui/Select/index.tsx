import { FC, useState } from "react"
import Icons from "../Icons"
import styles from "./style.module.css"

interface Props {
    array: string[]
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Select: FC<Props> = ({ array, setValue, value }) => {
    const [active, setActive] = useState(false)

    function selectItem(item: string) {
        setValue(item)
        setActive(false)
    }

    return (
        <div className={styles.Select}>
            <div onClick={() => setActive(!active)} className={styles.Value}>
                {value}
                <Icons.ArrowDown className={active ? styles.Active : ""} />
            </div>

            {active && <div className={styles.List}>
                {array.map((item, index) => (
                    <div key={index} onClick={() => selectItem(item)}>{item}</div>
                ))}
            </div>}
        </div>
    )
}

export default Select
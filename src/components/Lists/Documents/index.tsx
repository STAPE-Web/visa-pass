import { addDocList, documentsList } from "@/constants"
import styles from "./style.module.css"
import { useState } from "react"
import Icons from "@/ui/Icons"

const Documents = () => {
    const [active, setActive] = useState(0)

    return (
        <div className={styles.Box}>
            <div className={styles.List}>
                {documentsList.map((item, index) => (
                    <div key={index}>
                        <Icons.Check />
                        {item}
                    </div>
                ))}
            </div>

            <div className={styles.AdditionalBox}>
                <div className={styles.Tabs}>
                    {addDocList.map((item, index) => (
                        <div key={index} className={index === active ? styles.Active : ""} onClick={() => setActive(index)}>{item.type}</div>
                    ))}
                </div>

                <div className={styles.List}>
                    {addDocList[active].array.map((item, index) => (
                        <div key={index}>
                            <Icons.Check />
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Documents
import { advantageList } from "@/constants"
import styles from "./style.module.css"

const Advatages = () => {
    return (
        <div className={styles.List}>
            {advantageList.map((item, index) => (
                <div key={index} className={styles.Item}>
                    <item.icon />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Advatages
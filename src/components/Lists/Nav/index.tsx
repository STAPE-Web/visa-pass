import { navList } from "@/constants"
import styles from "./style.module.css"
import { anchorSection } from "@/functions"

const Nav = () => {
    return (
        <ul className={styles.Nav}>
            {navList.map((item, index) => (
                <li onClick={() => anchorSection(item.link)} key={index}>{item.name}</li>
            ))}
        </ul>
    )
}

export default Nav
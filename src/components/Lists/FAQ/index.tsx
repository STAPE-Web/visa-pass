import { faqList } from "@/constants"
import styles from "./style.module.css"
import FaqItem from "@/ui/FaqItem"

const FAQ = () => {
    return (
        <div className={styles.List}>
            {faqList.map((item, index) => (
                <FaqItem item={item} key={index} />
            ))}
        </div>
    )
}

export default FAQ
import styles from "./style.module.css"
import Text from "@/ui/Text"
import Lists from "@/components/Lists"

const FAQ = () => {
    return (
        <section className={styles.Section}>
            <div id="faq"></div>
            <Text.Title children="Часто задаваемые вопросы" />
            <Lists.FAQ />
        </section>
    )
}

export default FAQ
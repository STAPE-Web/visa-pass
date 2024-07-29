import Lists from "@/components/Lists"
import Text from "@/ui/Text"
import styles from "./style.module.css"

const Advatages = () => {
    return (
        <section className={styles.Section}>
            <Text.Title children="С нами надежно и выгодно" />
            <Lists.Advatages />
        </section>
    )
}

export default Advatages
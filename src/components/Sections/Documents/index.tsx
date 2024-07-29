import Text from "@/ui/Text"
import styles from "./style.module.css"
import { useParams } from "react-router-dom"
import { data } from "@/constants/data"
import Lists from "@/components/Lists"

const Documents = () => {
    const { id } = useParams()
    const activeCountry = data.find(i => i.id === id)

    return (
        <section className={styles.Section}>
            <Text.Title children={`Список основных документов для всех типов виз в ${activeCountry?.name2}`} />
            <Lists.Documents />
        </section>
    )
}

export default Documents
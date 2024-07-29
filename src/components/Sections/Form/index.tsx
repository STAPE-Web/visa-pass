import { useParams } from "react-router-dom"
import styles from "./style.module.css"
import Text from "@/ui/Text"
import { data } from "@/constants/data"
import VisaForm from "@/components/Form"

const Form = () => {
    const { id } = useParams()
    const activeCountry = data.find(i => i.id === id)

    return (
        <section className={styles.Section}>
            <Text.Title children={`Виза в ${activeCountry?.name2} для россиян в ${new Date().getFullYear()}`} />
            <VisaForm />
        </section>
    )
}

export default Form
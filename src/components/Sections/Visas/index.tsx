import { visasList } from "@/constants"
import styles from "./style.module.css"
import Text from "@/ui/Text"
import { useNavigate } from "react-router-dom"

const Visas = () => {
    const navigate = useNavigate()

    return (
        <section className={styles.Section}>
            <div id="visas"></div>

            <Text.Title children="Визы" />

            <div className={styles.Grid}>
                {visasList.map((item, index) => (
                    <div key={index} onClick={() => navigate(`/country/${item.id}`)}>
                        <img src={item.flag} alt="" />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Visas
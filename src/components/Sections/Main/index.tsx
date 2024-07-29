import Header from "@/components/Header"
import styles from "./style.module.css"
import Wave from "@/assets/Wave"
import { useParams } from "react-router-dom"
import { data } from "@/constants/data"

const Main = () => {
    const { id } = useParams()
    const activeCountry = data.find(i => i.id === id)

    return (
        <section className={styles.Section} style={id ? { backgroundImage: `url("${activeCountry?.image}")` } : {}}>
            <Header />

            <div className={styles.Box}>
                <h1>Шенгенская виза в {id ? activeCountry?.name2 : "Европу"}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quidem maiores porro id? Culpa provident quod sequi modi, animi suscipit!</p>
            </div>

            <Wave className={styles.Wave} />
        </section>
    )
}

export default Main
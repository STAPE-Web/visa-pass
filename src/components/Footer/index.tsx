import Logo from "@/assets/Logo"
import { navList, visasList } from "@/constants"
import { useNavigate } from "react-router-dom"
import styles from "./style.module.css"
import { anchorSection } from "@/functions"
import Wave from "@/assets/Wave"

const Footer = () => {
    const navigate = useNavigate()

    return (
        <>
            <Wave className={styles.Wave} />

            <footer className={styles.Footer}>
                <div className={styles.Box}>
                    <div className={styles.Info}>
                        <Logo />
                        <p>+7 (939) 860-01-63</p>
                        <p>© copyright Visa Pass</p>
                    </div>

                    <div className={styles.List}>
                        <h3>Инфо</h3>

                        <ul>
                            {navList.map((item, index) => (
                                <li onClick={() => anchorSection(item.link)} key={index}>{item.name}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.List}>
                        <h3>Визы</h3>

                        <ul>
                            {visasList.map((item, index) => (
                                <li onClick={() => navigate(`/country/${item.id}`)} key={index}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
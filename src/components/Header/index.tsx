import Button from "@/ui/Buttons"
import Lists from "../Lists"
import styles from "./style.module.css"
import Logo from "@/assets/Logo"
import { useNavigate } from "react-router-dom"
import useGlobalStore from "@/store"

const Header = () => {
    const navigate = useNavigate()
    const changeIsModal = useGlobalStore(state => state.changeIsModal)

    return (
        <header className={styles.Header}>
            <div className={styles.Box}>
                <Logo className={styles.Logo} onClick={() => navigate("/")} />
                <Lists.Nav />
            </div>

            <Button.Default onClick={() => changeIsModal(true)}>Оформить визу</Button.Default>
        </header>
    )
}

export default Header
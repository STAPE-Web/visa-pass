import { visasTypeList } from "@/constants"
import Button from "@/ui/Buttons"
import Input from "@/ui/Input"
import Select from "@/ui/Select"
import Text from "@/ui/Text"
import { useState } from "react"
import styles from "./style.module.css"
import useGlobalStore from "@/store"

const Modal = () => {
    const [type, setType] = useState("Туристическая")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")
    const isModal = useGlobalStore(state => state.isModal)
    const changeIsModal = useGlobalStore(state => state.changeIsModal)

    return (
        <>
            {isModal && <div className={styles.Modal} onClick={() => changeIsModal(false)}>
                <div className={styles.Box} onClick={e => e.stopPropagation()}>
                    <Text.Label text="Тип визы"><Select array={visasTypeList} setValue={setType} value={type} /></Text.Label>
                    <Text.Label text="Номер телефона"><Input onChange={e => setPhone(e.target.value)} value={phone} placeholder="+7 (999) 999-99-99" /></Text.Label>
                    <Text.Label text="Ваш город"><Input onChange={e => setCity(e.target.value)} value={city} placeholder="Москва" /></Text.Label>
                    <Button.Default onClick={() => ({})}>Отправить заявку</Button.Default>
                </div>
            </div>}
        </>
    )
}

export default Modal
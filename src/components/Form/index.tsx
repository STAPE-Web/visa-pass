import { visasTypeList } from "@/constants"
import Button from "@/ui/Buttons"
import Select from "@/ui/Select"
import { useState } from "react"
import styles from "./style.module.css"
import Input from "@/ui/Input"
import Text from "@/ui/Text"

const VisaForm = () => {
    const [type, setType] = useState("Туристическая")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")

    return (
        <div className={styles.Form}>
            <div className={styles.Box}>
                <Text.Label text="Тип визы"><Select array={visasTypeList} setValue={setType} value={type} /></Text.Label>
                <Text.Label text="Номер телефона"><Input onChange={e => setPhone(e.target.value)} value={phone} placeholder="+7 (999) 999-99-99" /></Text.Label>
                <Text.Label text="Ваш город"><Input onChange={e => setCity(e.target.value)} value={city} placeholder="Москва" /></Text.Label>
            </div>

            <Button.Default onClick={() => ({})}>Отправить заявку</Button.Default>
        </div>
    )
}

export default VisaForm
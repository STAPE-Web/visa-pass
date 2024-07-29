import styles from "./style.module.css"
import Text from "@/ui/Text"

const Contacts = () => {
    return (
        <section className={styles.Section}>
            <div id="contacts"></div>
            <Text.Title children="Контакты" />

            <div className={styles.Box}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A44a2831022428ae7ecfb57f07427551cdfeb5f41959418ddd1f5236a1507783c&amp;source=constructor" width="600" height="400" frameBorder="0"></iframe>

                <div className={styles.Info}>
                    <div className={styles.Main}>
                        <p>+7 (939) 860-01-63</p>
                        <p>Работаем с 9:00 до 18:00</p>
                        <p>г.Москва, Чапаевский переулок 6, ст.м Сокол.</p>
                    </div>

                    <div className={styles.Small}>
                        <span>ИНН 770201000406</span>
                        <span>ОГРНИП 322508100416160</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts
import Slider from "@/components/Slider"
import styles from "./style.module.css"
import Text from "@/ui/Text"

const Reviews = () => {
    return (
        <section className={styles.Section}>
            <div id="reviews"></div>
            <Text.Title children="Отзывы" />
            <Slider />
        </section>
    )
}

export default Reviews
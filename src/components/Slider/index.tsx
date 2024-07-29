import { reviewList } from "@/constants"
import Button from "@/ui/Buttons"
import styles from "./style.module.css"
import { useState } from "react"
import Icons from "@/ui/Icons"

const Slider = () => {
    const [slide, setSlide] = useState(0)

    return (
        <div className={styles.Slider}>
            <Button.Round onClick={() => setSlide(slide !== 0 ? slide - 1 : reviewList.length - 1)}>
                <Icons.ArrowLeft className={styles.Icon} />
            </Button.Round>

            <div className={styles.Slide}>
                <img src={reviewList[slide].avatar} alt="" />
                <h3>{reviewList[slide].username}</h3>
                <p>{reviewList[slide].text}</p>
            </div>

            <Button.Round onClick={() => setSlide(slide !== reviewList.length - 1 ? slide + 1 : 0)}>
                <Icons.ArrowRight className={styles.Icon} />
            </Button.Round>

            <div className={styles.MobileButtons}>
                <Button.Round onClick={() => setSlide(slide !== 0 ? slide - 1 : reviewList.length - 1)}>
                    <Icons.ArrowLeft className={styles.Icon} />
                </Button.Round>

                <Button.Round onClick={() => setSlide(slide !== reviewList.length - 1 ? slide + 1 : 0)}>
                    <Icons.ArrowRight className={styles.Icon} />
                </Button.Round>
            </div>
        </div>
    )
}

export default Slider
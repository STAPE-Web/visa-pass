import Sections from "@/components/Sections"
import { Helmet } from "react-helmet-async"

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Visa Pass</title>
            </Helmet>

            <main>
                <Sections.Main />
                <Sections.Advatages />
                <Sections.Visas />
                <Sections.Reviews />
                <Sections.Contacts />
                <Sections.FAQ />
            </main>
        </>
    )
}

export default Home
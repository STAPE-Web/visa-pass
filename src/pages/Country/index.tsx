import Sections from "@/components/Sections"
import { data } from "@/constants/data"
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"

const Country = () => {
    const { id } = useParams()
    const activeCountry = data.find(i => i.id === id)

    return (
        <>
            <Helmet>
                <title>Visa Pass | {activeCountry?.name}</title>
            </Helmet>

            <main>
                <Sections.Main />
                <Sections.Form />
                <Sections.Documents />
                <Sections.Visas />
                <Sections.Contacts />
                <Sections.FAQ />
            </main>
        </>
    )
}

export default Country
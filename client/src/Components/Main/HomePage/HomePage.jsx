import { useEffect } from "react"
import { Step_1 } from "./Step_1/Step_1"
import { Step_2 } from "./Step_2/Step_2"

export const HomePage = () => {
    useEffect(() => {
        document.title = 'SHOPPE | Home'
    }, [])

    return (
        <>
            <Step_1 />
            <Step_2 />
        </>
    )
}
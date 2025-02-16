import { Biling } from "./components/Biling"
import { Shipping } from "./components/Shipping"

export const Addresses = () => {
    return (
        <section className="Addresses">
            <h4>The following addresses will be used on the checkout page by default.</h4>
            <section className="Addresses_content">
                <Biling />

                <Shipping />
            </section>
        </section>
    )
}
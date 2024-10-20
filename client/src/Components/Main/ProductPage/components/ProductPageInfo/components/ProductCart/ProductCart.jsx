import { useState } from "react";
import { CounterProduct } from "./components/CounterProduct"
import { useCookies } from 'react-cookie'

export const ProductCart = ({ productInfo }) => {
    const [cookie, setCookie] = useCookies([]);
    const [countValue, setCountValue] = useState(0);

    const CounterGetValue = (value) => {
        setCountValue(value)
    }

    const ButtonHandle = () => {
        setCookie("Products", [
            {
                ProductCount: countValue,
                product: productInfo
            }
        ])
    }

    return (
        <section className="ProductPage_head_info_counter">
            <CounterProduct GetValue={CounterGetValue} />
            <button onClick={ButtonHandle}>ADD TO CART</button>
        </section>
    )
}
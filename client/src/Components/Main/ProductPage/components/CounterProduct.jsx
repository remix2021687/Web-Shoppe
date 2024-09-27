import { useState } from "react"

export const CounterProduct = () => {
    const [isDynamicEdit, setIsDynamicEdit] = useState(false);
    const [counter, setCounter] = useState(0);

    if (counter < 0) {
        setCounter(0)
    }

    const OnBlurEvent = (event) => {
        setIsDynamicEdit(false)

        console.log(event.key)
    }

    const CounterInputValidator = (event) => {
        setCounter(Number(event.target.value))
    }

    const EnterClickHandler = (event) => {
        if (event.key === "Enter") {
            setIsDynamicEdit(false);
        }
    }

    return (
        <section className="CounterProduct">
            {
                !isDynamicEdit ?
                <>
                    <button onClick={() => {setCounter(counter + 1)}}>+</button>
                    <h2 onClick={() => {setIsDynamicEdit(true)}}>{counter}</h2>
                    <button onClick={() => {setCounter(counter - 1)}}>-</button>
                </>
                :
                <input type="number" value={counter} onChange={CounterInputValidator} onKeyDown={EnterClickHandler} onBlur={OnBlurEvent} />
            }
        </section>
    )
}
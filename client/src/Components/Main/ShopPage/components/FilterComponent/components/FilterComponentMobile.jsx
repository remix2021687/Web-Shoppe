import { useState } from "react"
import { FilterComponent } from "../FilterComponent"
import { assets } from "../../../../../../assets/assets"

export const FilterComponentMobile = ({ Context }) => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleClick = () => {
        setIsOpen(true);

        if (isOpen) setIsOpen(false);
    }
 
    return (
        <>
            <section className="FilterComponentMobile">
                <button onClick={HandleClick}>
                    <img src={assets.filter_icon}  alt='filter_icon' />
                    Filter
                </button>
                <section className="FilterComponentMobile_Filter" style={{height: isOpen ? '380px': 0}}>
                    <FilterComponent setParentToChild={Context} />
                </section>
            </section>
        </>
    )
}
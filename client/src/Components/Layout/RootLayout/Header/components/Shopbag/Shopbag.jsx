import { useState, useContext } from "react" 
import { ShopbagProduct } from "./components/ShopbagProduct"
import { X } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { ShopBagContext } from "../../Header"

export const Shopbag = ({ setIsOpenClose }) => {
    const ShopBagStateContext = useContext(ShopBagContext);
    const [coockeData, setCooceData] = useState();

    const OpenCloseMenuAnimation = {
        hidden: {
            display: 'none',
            transform: 'translateX(100%)'
        },

        visible: {
            display: 'block',
            transform: 'translateX(0%)'
        }
    }

    const HandleCloseButton = (event) => {
        setIsOpenClose(event);
    }

    return (
        <motion.section 
            className="Shopbag"
            variants={OpenCloseMenuAnimation}
            initial='hidden'
            animate={ShopBagStateContext ? 'visible': 'hidden'}
        >
            <X
                className="Shopbag_closeButton" 
                size={28} 
                weight="bold" 
                onClick={HandleCloseButton} 
            />

            <h3>Shopping bag</h3>
            {
                coockeData ?
                <section className="Shopbag_viewer">
                    <h4>5 items</h4>
                    <section className="Shopbag_viewer_content">
                        <ShopbagProduct />
                    </section>
                    <section className="Shopbag_viewer_count">
                        <section className="Shopbag_viewer_count_info">
                            <h5>Subtotal (5 items)</h5>
                            <h5>$ 100,00</h5>
                        </section>
                        <button>VIEW CART</button>
                    </section>
                </section>
                :
                null
            }
        </motion.section>
    )
}
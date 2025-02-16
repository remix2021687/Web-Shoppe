import { useState } from "react"
import { motion } from 'framer-motion'

export const Biling = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <section className="Addresses_Biling">
            <h2>Billing address</h2>
            {
                isActive ? 
                <>
                    <form className="Addresses_Biling_form">
                        <section>
                            <input type="text" name="first_name" placeholder="First name *"/>
                            <input type="text" name="last_name" placeholder="Last name *"/>
                        </section>
                        <input type="text" name="company_name" placeholder="Company Name *"/>
                        <input type="text" name="street_address" placeholder="Street Address *"/>
                        <input type="text" name="postcode" placeholder="Postcode / ZIP *" pattern="^\b[A-Z0-9\s\-]{3,10}\b$"/>
                        <input type="text" name="city" placeholder="Town / City *"/>
                        <input type='tel' name="phone" placeholder="Phone *" pattern="^\+\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"/>
                        <input type='email' name="phone" placeholder="Email *"/>
                    </form>
                    <button><span>SAVE ADDRESS</span></button>
                </>
                :
                <section className="Addresses_Biling_unselect">
                    <motion.button whileTap={{scale: 0.90}} onClick={() => {setIsActive(true)}}>ADD</motion.button>
                    <p>You have not set up this type of address yet.</p>
                </section>
            }
        </section>
    )
}
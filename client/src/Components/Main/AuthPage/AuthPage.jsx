import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export const AuthPage = () => {
    const [formState, setFromState] = useState('Sing In');

    useEffect(() => {
        document.title = 'SHOPPE | Auth'
    }, [])


    return (
        <section className="AuthPage">
            <h1>My account</h1>
            <section className="AuthPage_switch">
                <button onClick={() => {setFromState('Sing In')}}>
                    <motion.span
                        animate={{x: formState == 'Sing In' ? '0%': '100%'}}
                        transition={{
                            type: 'tween',
                            ease: 'easeInOut',
                            duration: 0.5
                        }}
                    ></motion.span>
                    <h3>Sign In</h3>
                </button>
                <button onClick={() => {setFromState('Register')}}><h3>Register</h3></button>
            </section>
            <section></section>
        </section>
    )
}
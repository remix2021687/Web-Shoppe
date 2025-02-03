import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Register } from './components/Register';
import { SignIn } from './components/SignIn';

export const AuthPage = () => {
    const [formState, setFromState] = useState('Sign In');

    useEffect(() => {
        document.title = 'SHOPPE | Auth'
    }, [])


    return (
        <section className="AuthPage">
            <h1>My account</h1>
            <section className="AuthPage_switch">
                <button onClick={() => {setFromState('Sign In')}}>
                    <motion.span
                        animate={{x: formState == 'Sign In' ? '0%': '100%'}}
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

            {
                formState == 'Sign In' ?
                    <SignIn />
                    :
                    <Register />
            }

        </section>
    )
} 
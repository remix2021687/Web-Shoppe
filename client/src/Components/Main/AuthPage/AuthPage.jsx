import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

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
                    <form className='AuthPage_SingIn' onSubmit={(event) => {event.preventDefault()}}>
                        <section className='AuthPage_SingIn_inputs'>
                            <input type='email' name='email' placeholder='Email'/>
                            <input type='password' name='password' placeholder='Password'/>
                        </section>
                        <section className='AuthPage_SingIn_footer'>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                transition={{
                                    type: 'tween',
                                    duration: 0.3
                                }}
                                whileTap={{scale: 0.9}}
                            >SIGN IN</motion.button>
                            <a href='#'>Have you forgotten your password?</a>
                        </section>
                    </form>
                    :
                    <form className='AuthPage_SingIn Register' onSubmit={(event) => {event.preventDefault()}}>
                        <section className='AuthPage_SingIn_inputs'>
                            <input type='text' name='first_name' placeholder='First Name' />
                            <input type='text' name='last_name' placeholder='Last Name' />
                            <input type='email' name='email' placeholder='Email'/>
                            <input type='password' name='password' placeholder='Password'/>
                            <input type='password' name='retry_password' placeholder='Retry Password'/>
                        </section>
                        <section className='AuthPage_SingIn_footer'>
                            <motion.button
                                whileHover={{scale: 1.05}}
                                transition={{
                                    type: 'tween',
                                    duration: 0.3
                                }}
                                whileTap={{scale: 0.9}}
                            >Register</motion.button>
                            <a href='#'>Have you forgotten your password?</a>
                        </section>
                    </form>
            }

        </section>
    )
} 
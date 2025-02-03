import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const RequiredErrorMSG = 'This field is required !'
    const EmailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    return (
        <>
            <form className='AuthPage_SingIn Register' onSubmit={(event) => {event.preventDefault()}}>
                <section className='AuthPage_SingIn_inputs'>
                    <section>
                        <input 
                            {...register('first_name', {
                                required: RequiredErrorMSG,
                            })}
                            type='text' 
                            name='first_name' 
                            placeholder='First Name' 
                        />
                        <span>errors</span>
                    </section>
                    <section>
                        <input 
                            {...register('last_name', {
                                required: RequiredErrorMSG
                            })}
                            type='text' 
                            name='last_name' 
                            placeholder='Last Name' 
                        />
                        <span>errors</span>
                    </section>
                    <section>
                        <input 
                            {...register('email', {
                                required: RequiredErrorMSG,
                                pattern: EmailRegax
                            })}
                            type='email' 
                            name='email' 
                            placeholder='E-mail' 
                        />
                        <span>errors</span>
                    </section>
                    <section>
                        <input 
                            type='password' 
                            name='password' 
                            placeholder='Password' 
                        />
                        <span>errors</span>
                    </section>
                    <section>
                        <input type='password' name='retry_password' placeholder='Retry Password' />
                        <span>errors</span>
                    </section>
                    
                    
                    
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
        </>
    )
}
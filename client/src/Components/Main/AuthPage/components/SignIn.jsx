import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'

export const SignIn = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    
    const RequiredErrorMSG = 'This field is required !'
    const EmailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const FormSumbit = (event) => {
        console.log(event);
    }

    return (
        <>
            <form className='AuthPage_SingIn' onSubmit={handleSubmit(FormSumbit)}>
                <section className='AuthPage_SingIn_inputs'>
                    <section>
                        <input {...register("email", {
                                required: RequiredErrorMSG,
                                pattern: EmailRegax
                            })} 
                                type='email' 
                                name='email' 
                                placeholder='Email'
                        />
                        {
                            errors.email ? 
                            <span>{errors.email.message}</span>
                            :
                            null
                        }
                    </section>

                    <section>
                        <input {...register("password", {
                                required: RequiredErrorMSG,
                                minLength: 5,
                            })}
                                type='password' 
                                name='password' 
                                placeholder='Password'
                        />
                        {
                            errors.password ?
                            <span>{errors.password.message}</span>
                            :
                            null
                        }
                    </section>

                </section>
                <section className='AuthPage_SingIn_footer'>
                    <motion.button
                        type='submit'
                        whileHover={{scale: 1.05}}
                        transition={{
                            type: 'tween',
                            duration: 0.3
                        }}
                        whileTap={{scale: 0.9}}
                    >
                        SIGN IN
                    </motion.button>
                    <a href='#'>Have you forgotten your password?</a>
                </section>
            </form>
        </>
    )
}
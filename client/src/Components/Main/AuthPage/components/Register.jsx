import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { AuthRegister } from '../../../../Axios/AxiosInit';

export const Register = () => {
    const {register, handleSubmit, getValues, formState: {errors}} = useForm();
    const RequiredErrorMSG = 'This field is required !'
    const EmailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const onSubmit = (data) => {
        AuthRegister(data)
    }

    return (
        <>
            <form className='AuthPage_SingIn Register' onSubmit={handleSubmit(onSubmit)}>
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
                        <span>{errors.first_name?.message}</span>
                    </section>
                    <section>
                        <input 
                            {...register('last_name', {
                                required: RequiredErrorMSG,
                            })}
                            type='text' 
                            name='last_name' 
                            placeholder='Last Name' 
                        />
                        <span>{errors.last_name?.message}</span>
                    </section>
                    <section>
                        <input 
                            {...register('email', {
                                required: RequiredErrorMSG,
                                pattern: {
                                    value: EmailRegax,
                                    message: 'Incorrect Email'
                                }
                            })}
                            type='email' 
                            name='email' 
                            placeholder='E-mail' 
                        />
                        <span>{errors.email?.message}</span>
                    </section>
                    <section>
                        <input 
                            {...register('username', {
                                required: RequiredErrorMSG,
                                minLength: {
                                    value: 5,
                                    message: 'Username is small'
                                }
                            })}
                            type='text' 
                            name='username' 
                            placeholder='Username' 
                        />
                        <span>{errors.email?.message}</span>
                    </section>
                    <section>
                        <input
                            {...register('password', {
                                required: RequiredErrorMSG,
                                minLength: {
                                    value: 8,
                                    message: 'Password must not be less than 8 characters'
                                }
                            })}
                            type='password' 
                            name='password' 
                            placeholder='Password' 
                        />
                        <span>{errors.password?.message}</span>
                    </section>
                    <section>
                        <input 
                            {...register('confirm_password', {
                                required: RequiredErrorMSG,
                                validate: (match) => {
                                    const password = getValues('password')
                                    return match === password || 'Password should much !'
                                }
                            })}
                            type='password' 
                            name='confirm_password' 
                            placeholder='Confirm Password' 
                        />
                        <span>{errors.confirm_password?.message}</span>
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
                    ><span>Register</span></motion.button>
                </section>
            </form>
        </>
    )
}
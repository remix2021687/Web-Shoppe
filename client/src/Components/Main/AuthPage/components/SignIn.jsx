import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { AuthLogin } from '../../../../Axios/AxiosInit';

export const SignIn = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();
    
    const RequiredErrorMSG = 'This field is required !'

    const OnSubmit = async (inputeData) => {
        await AuthLogin({
            'username': inputeData.username,
            'password': inputeData.password
        })
        .then((res) => {
            localStorage.setItem('token', res.data.access)
            localStorage.setItem('token_ref', res.data.refresh)
        })
    }

    return (
        <>
            <form className='AuthPage_SingIn' onSubmit={handleSubmit(OnSubmit)}>
                <section className='AuthPage_SingIn_inputs'>
                    <section>
                        <input {...register("username", {
                                required: RequiredErrorMSG,
                            })} 
                                type='text' 
                                name='username' 
                                placeholder='Username'
                        />
                        <span>{errors.username?.message}</span>
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
                        <span>{errors.password?.message}</span>
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
                        <span>SIGN IN</span>
                    </motion.button>
                    <a href='#'>Have you forgotten your password?</a>
                </section>
            </form>
        </>
    )
}
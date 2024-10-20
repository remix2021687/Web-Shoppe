import { Checkbox, ConfigProvider, Rate } from "antd"
import { motion } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { useParams } from "react-router-dom"
import { useCookies, CookiesProvider } from 'react-cookie'
import { PostReviewProduct } from "../../../../../../../../Axios/AxiosInit"


export const ReviewFormSend = () => {
    const { id } = useParams();
    const RequiredErrorMSG = 'This field is required !'
    const [cookie, setCookie, removeCookie] = useCookies([])

    const { register, control, handleSubmit, setError, formState: { errors } } = useForm({
        defaultValues: {
            Email: cookie.saveInfoCookeid ? cookie.saveInfoCookeid.email: '',
            FirstName: cookie.saveInfoCookeid ? cookie.saveInfoCookeid.first_name: '',
            LastName: cookie.saveInfoCookeid ? cookie.saveInfoCookeid.last_name: '',
            CheackBoxCoockid: false,
            isDeleteCheackBox: false,
            Rate: 0
        }
    });

    const onSubmit = async (data) => {
        console.log(data)
        await PostReviewProduct({
            email: data.Email,
            first_name: data.FirstName,
            last_name: data.LastName,
            comment: data.Comment,
            rate: data.Rate,
            product: id,
        })

        if (data.CheackBoxCoockid) {
            setCookie('saveInfoCookeid', {
                first_name: data.FirstName,
                last_name: data.LastName,
                email: data.Email
            })
        }

        if (data.isDeleteCheackBox) {
            removeCookie('saveInfoCookeid')
        }
    }

    return (
        <section className="Review_form">
            <section className="Review_form_header">
                <h2>Add a Review</h2>
                <h4>Your email address will not be published. Required fields are marked *</h4>
            </section>
            <form className="Review_form_content" onSubmit={handleSubmit(onSubmit)}>
                <section className="Review_form_content_textarea">
                    <textarea 
                        placeholder="Your Review*" 
                        maxLength={5000} 
                        {...register('Comment', {required: RequiredErrorMSG})}
                    ></textarea>
                    <span className="Error_snap">{errors.Comment ? errors.Comment.message: null}</span>
                </section>
            
                <section className="Review_form_content_last_fist_name">
                    <section>
                        <input 
                            className="textInput" 
                            type='text' 
                            name="first_name" 
                            placeholder="Enter your fist name*"
                            disabled={cookie.saveInfoCookeid ? true: false}
                            {...register("FirstName", {required: RequiredErrorMSG})}
                        />
                        <span className="Error_snap">{errors.FirstName ? errors.FirstName.message: null}</span>
                    </section>
                    <section>
                        <input 
                            className="textInput" 
                            type='text' 
                            name="last_name" 
                            placeholder="Enter your last name*"
                            disabled={cookie.saveInfoCookeid ? true: false}
                            {...register("LastName", {required: RequiredErrorMSG})} 
                        />
                        <span className="Error_snap">{errors.LastName ? errors.LastName.message: null}</span>
                    </section>
                </section>
                
                <section className="Review_form_content_email">
                    <input 
                        className="textInput" 
                        type='email' 
                        name="email" 
                        placeholder="Enter your Email*"
                        disabled={cookie.saveInfoCookeid ? true: false}
                        {...register("Email", {
                            required: RequiredErrorMSG,
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: 'Please enter a valid email !'
                            }
                        })} 
                    />
                    <span className="Error_snap">{errors.Email ? errors.Email.message: null}</span>
                </section>
                
                <section className="Review_form_content_savecookee">
                    {
                        cookie.saveInfoCookeid ?
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: 'black',
                                    borderRadiusSM: 2,
                                    controlInteractiveSize: 18
                                }
                            }}
                        >
                            <Controller 
                                control={control}
                                name="isDeleteCheackBox"
                                rules={{required: false}}
                                render={({ field: {value, onChange} }) => (
                                    <Checkbox 
                                        checked={value}
                                        onChange={(event) => onChange(event.target.checked)}
                                    />
                                )}
                            />
                            <p>Delete name, email on website ?</p>
                        </ConfigProvider>
                        :
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: 'black',
                                    borderRadiusSM: 2,
                                    controlInteractiveSize: 18
                                }
                            }}
                        >
                            <Controller 
                                control={control}
                                name="CheackBoxCoockid"
                                rules={{required: false}}
                                render={({ field: {value, onChange} }) => (
                                    <Checkbox 
                                        checked={value}
                                        onChange={(event) => onChange(event.target.checked)}
                                    />
                                )}
                            />
                            <p>Save my name, email, and website in this browser for the next time I comment</p>
                        </ConfigProvider>
                    }
                </section>
                <section className="Review_form_content_rate">
                    <h4>Your Rating*</h4>
                    <Controller 
                        control={control}
                        name="Rate"
                        rules={{required: true}}
                        render={({field: {value, onChange} }) => (
                            <Rate 
                                style={{color: 'black'}} 
                                defaultValue={0}
                                value={value}
                                onChange={(event) => onChange(event)}    
                            />
                        )}
                    />
                    <span className="Error_snap">{errors.Rate ? errors.Rate.message: null}</span>
                </section>
                <motion.button 
                    type='submit' 
                    whileTap={{scale: 0.8}} 
                    whileHover={{scale: 1.04}}
                    onClick={() => {
                        setError('Rate', {type: 'required', message: "Test"})
                    }}
                >
                    Submit
                </motion.button>
            </form>
        </section>
    )
}
import { ReviewComment } from "./components/ReviewComment"
import { useParams } from "react-router-dom"
import { Checkbox, ConfigProvider, Rate } from "antd"
import { motion } from 'framer-motion'
import { useForm, Controller } from 'react-hook-form'
import { PostReviewProduct } from "../../../../../../../Axios/AxiosInit"

export const Review = ({dataReview}) => {
    const { id } = useParams();
    const reviewCount = dataReview.length;
    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            coockeIsOn: false,
            Rate: 0
        }
    });


    const onSubmit = async (data) => {
        await PostReviewProduct({
            first_name: data.FirstName,
            last_name: data.LastName,
            comment: data.Comment,
            rate: data.Rate,
            product: id,
        })
    }

    return (
        <section className="Review">
            <section className="Review_content">
                <h2>{dataReview ? reviewCount: null} Reviews for lira earings</h2>
                
                <section className="Review_content__content"
                    style={{
                        overflowY: dataReview.length > 5 ? 'scroll': 'visible',
                    }}
                >
                    {
                        dataReview ?
                        dataReview.length > 0 ?
                            dataReview.map((data, index) => 
                                <ReviewComment
                                    key={index + 1}
                                    LastName={data.last_name}
                                    FirstName={data.first_name}
                                    DateCreated={data.data}
                                    CountRate={data.rate}
                                    Comment={data.comment}
                                />
                            )
                        :
                        <h2>Review not found</h2>
                        :
                        null
                    }
                </section>
            </section>
            <section className="Review_form">
                <section className="Review_form_header">
                    <h2>Add a Review</h2>
                    <h4>Your email address will not be published. Required fields are marked *</h4>
                </section>
                <form className="Review_form_content" onSubmit={handleSubmit(onSubmit)}>
                    <textarea placeholder="Your Review*" maxLength={5000} {...register('Comment', {required: true})}></textarea>

                    <section className="Review_form_content_last_fist_name">
                        <input className="textInput" type='text' name="first_name" placeholder="Enter your fist name*" {...register("FirstName", {required: true})} />
                        <input className="textInput" type='text' name="last_name" placeholder="Enter your last name*" {...register("LastName", {required: true})} />
                    </section>
                    
                    <input className="textInput" type='email' name="email" placeholder="Enter your Email*" {...register("Email", {required: true})} />

                    <section className="Review_form_content_savecookee">
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
                                name="coockeIsOn"
                                render={({ field: {value, onChange} }) => (
                                    <Checkbox 
                                        checked={value}
                                        onChange={(event) => onChange(event.target.checked)}
                                    />
                                )}
                            />
                            <p>Save my name, email, and website in this browser for the next time I comment</p>
                        </ConfigProvider>
                    </section>

                    <section className="Review_form_content_rate">
                        <h4>Your Rating*</h4>
                        <Controller 
                            control={control}
                            name="Rate"
                            render={({field: {value, onChange} }) => (
                                <Rate 
                                    style={{color: 'black'}} 
                                    defaultValue={0}
                                    value={value}
                                    onChange={(event) => onChange(event)}    
                                />
                            )}
                        />
                    </section>

                    <motion.button whileTap={{scale: 0.8}} whileHover={{scale: 1.04}}>Submit</motion.button>
                </form>
            </section>
        </section>
    )
}
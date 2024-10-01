import { ReviewComment } from "./components/ReviewComment"
import { Checkbox, ConfigProvider, Rate } from "antd"
import { motion } from 'framer-motion'

export const Review = ({dataReview}) => {
    const reviewCount = dataReview.length;

    return (
        <section className="Review">
            <section className="Review_content">
                <h2>{dataReview ? reviewCount: null} Reviews for lira earings</h2>
                
                <section className="Review_content__content">
                    {
                        dataReview ?
                        dataReview.map((data, index) => 
                            <ReviewComment
                                key={index + 1}
                                LastName={data.user.last_name}
                                FirstName={data.user.first_name}
                                DateCreated={data.data}
                                CountRate={data.rate}
                                Comment={data.comment}
                            />
                        )
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

                <form className="Review_form_content" onSubmit={(event) => {event.preventDefault()}}>
                    <textarea placeholder="Your Review*" maxLength={5000}></textarea>

                    <input className="textInput" type='text' name="name" placeholder="Enter your name*" />
                    <input className="textInput" type='email' name="name" placeholder="Enter your Email*" />

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
                            <Checkbox />
                            <p>Save my name, email, and website in this browser for the next time I comment</p>
                        </ConfigProvider>
                    </section>

                    <section className="Review_form_content_rate">
                        <h4>Your Rating*</h4>
                        <Rate style={{color: 'black'}} defaultValue={0} />
                    </section>

                    <motion.button whileTap={{scale: 0.8}}>Submit</motion.button>
                </form>
            </section>
        </section>
    )
}
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify'
import { ReviewComment } from "./components/ReviewComment"
import { ReviewFormSend } from "./components/ReviewFormSend";
import { ReviewFormSendMobile } from "./components/ReviewFormSendMobile";


export const Review = ({dataReview}) => {
    const reviewCount = dataReview.length;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWidth = () => {setScreenWidth(window.innerWidth)}

        window.addEventListener('resize', handleWidth);

        return () => window.removeEventListener('resize', handleWidth);
    })

    return (
        <>
            <ToastContainer 
                autoClose={3000}
                pauseOnHover={false}
                position="top-center"
            />
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
                {
                    screenWidth <= 768 ?
                    <ReviewFormSendMobile />
                    :
                    <ReviewFormSend />
                }
            </section>
        </>
    )
}
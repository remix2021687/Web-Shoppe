import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ReviewComment } from "./components/ReviewComment"
import { ReviewFormSend } from "./components/ReviewFormSend";
import { ReviewFormSendMobile } from "./components/ReviewFormSendMobile";
import { GetReviewProduct } from "../../../../../../../Axios/AxiosInit";


export const Review = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [reviewData, setReviewData] = useState([]);
    const reviewCount = reviewData.length;
    const { id } = useParams();
    
    useEffect(() => {
        const handleWidth = () => {setScreenWidth(window.innerWidth)}

        window.addEventListener('resize', handleWidth);

        return () => window.removeEventListener('resize', handleWidth);
    })

    useEffect(() => {
        GetReviewProduct(id)
        .then((res) => {
            setReviewData(res.data.reviews)
        })
        .catch((err) => {
            console.warn(err);
        })
    }, [])

    const SubmitEventHandle = (event) => {
        console.log(event)
    }
    
    return (
        <>
            <ToastContainer 
                autoClose={3000}
                pauseOnHover={false}
                position="top-center"
            />
            <section className="Review">
                <section className="Review_content">
                    <h2>{reviewData ? reviewCount: null} Reviews for lira earings</h2>
                    
                    <section className="Review_content__content"
                        style={{
                            overflowY: reviewCount > 3 ? 'scroll': 'visible',
                        }}
                    >
                        {
                            reviewData ?
                                reviewData.length > 0 ?
                                    reviewData.map((data, index) => 
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
                                null
                            :
                            null
                        }
                    </section>
                </section>
                {
                    screenWidth <= 768 ?
                    <ReviewFormSendMobile />
                    :
                    <ReviewFormSend setSubmitEvent={SubmitEventHandle} />
                }
            </section>
        </>
    )
}
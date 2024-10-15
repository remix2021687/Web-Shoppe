import { useState, useContext, useEffect } from "react"
import { CounterProduct } from "./CounterProduct";
import { Rate } from 'antd'
import { Heart, EnvelopeSimple, FacebookLogo, InstagramLogo, XLogo} from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { ProductPageInfoContext } from "../ProductPage";


export const ProductPageInfo = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [data, setData] = useState([])
    const categoryData = data.category
    const PageInfoContext = useContext(ProductPageInfoContext);

    const LikeHandler = () => {
        if (isLiked) {
            setIsLiked(false)
        } else {
            setIsLiked(true)
        }
    }

    useEffect(() => {
        if (PageInfoContext) {
            PageInfoContext.map((data) => {
                setData(data)
            })
        }
    }, [PageInfoContext])

    return (
        <section className="ProductPage_head_info">
        
            <section className="ProductPage_head_info_header">
                <h2>{data.name}</h2>
                <h3>$ {data.price}</h3>
            </section>

            <section className="ProductPage_head_info_description">
                <section className="ProductPage_head_info_description_rate">
                    <Rate 
                        allowHalf
                        disabled={true}
                        style={{color: 'black'}}
                        value={data.product_rate}
                    />
                    <h4>{data.reviews ? data.reviews.length: null} customer review</h4>
                </section>
                
                <p>{data.description_product}</p>
            </section>

            <section className="ProductPage_head_info_counter">
                <CounterProduct />
                <button>ADD TO CART</button>
            </section>

            <section className="ProductPage_head_info_footer">
                <section className="ProductPage_head_info_footer_social_and_like">
                    <motion.section whileTap={{scale: 0.8}} style={{width: '25px'}}>
                        <Heart className="HeartIcon" size={25} 
                            weight={isLiked ? "fill": 'bold'} 
                            color={isLiked ? "red": "#979797"}
                            onClick={LikeHandler}
                            
                        />
                    </motion.section>

                    <hr />

                    <section className="ProductPage_head_info_footer_social">
                        <a href="#" target="_blank" className="EmailIcon">
                            <EnvelopeSimple size={25} weight="bold" color="#979797" />
                        </a>
                        <a href={data.shop ? data.shop.facebook_link: null} target="_blank" className="FacebookIcon">
                            <FacebookLogo size={25} weight="bold" color="#979797" />
                        </a>
                        <a href={data.shop ? data.shop.instagram_link: null} target="_blank" className="InstagramIcon">
                            <InstagramLogo size={25} weight="bold" color="#979797" />
                        </a>
                        <a href={data.shop ? data.shop.x_link: null} target="_blank" className="XIcon">
                            <XLogo size={25} weight="bold" color="#979797" />
                        </a>
                    </section>
                </section>

                <section className="ProductPage_head_info_footer_sku_category">
                    <h4>SKU: <span>12</span></h4>
                    <h4>
                        Categories: {
                            categoryData ? categoryData.map((data, index) => <span key={index + 1}>{data.name}{index < categoryData.length - 1 ? ',': ''} </span>) : null
                        }
                    </h4>
                </section>
            </section>
        </section>
    )
}
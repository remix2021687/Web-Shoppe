import { useState, useEffect } from "react"
import { CounterProduct } from "./components/CounterProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { Rate } from 'antd'
import { Heart, EnvelopeSimple, FacebookLogo, InstagramLogo, XLogo} from '@phosphor-icons/react'
import { assets } from "../../../assets/assets";

export const ProductPage = () => {
    const [thumbsGallery, setThumbsGallery] = useState(null);

    useEffect(() => {
        document.title = 'SHOPPE | Name'
    }, [])

    return (
        <section className="ProductPage">
            <section className="ProductPage_head">
                <section className="ProductPage_viewer">
                    <section className="ProductPage_viewer_children">
                        <Swiper
                            onSwiper={setThumbsGallery}
                            spaceBetween={5}
                            slidesPerView={4}
                            modules={[Thumbs]}
                        >
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                        </Swiper>
                    </section>

                    <section className="ProductPage_viewer_parent">
                        <Swiper
                            spaceBetween={5}
                            thumbs={{ swiper: thumbsGallery }}
                            modules={[Thumbs]}
                        >
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={assets.img_test} alt="img_test" />
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </section>
                <section className="ProductPage_head_info">
                    <section className="ProductPage_head_info_header">
                        <h2>Lira Earrings</h2>
                        <h3>$ 20,00</h3>
                    </section>
                    <section className="ProductPage_head_info_description">
                        
                        <section className="ProductPage_head_info_description_rate">
                            <Rate 
                                allowHalf
                                disabled={true}
                                style={{color: 'black'}}
                                defaultValue={2.5}
                            />
                            <h4>1 customer review</h4>
                        </section>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, 
                        a maximus elit ex vitae libero. 
                        Sed quis mauris eget arcu facilisis consequat sed eu felis. </p>
                    </section>

                    <section className="ProductPage_head_info_counter">
                        <CounterProduct />
                        <button>ADD TO CART</button>
                    </section>
                    <section className="ProductPage_head_info_footer">
                        <section className="ProductPage_head_info_footer_social_and_like">
                            <Heart size={25} weight="bold" color="#979797" />
                            <hr />
                            <section className="ProductPage_head_info_footer_social">
                                <a href="#" target="_blank" className="EmailIcon">
                                    <EnvelopeSimple size={25} weight="bold" color="#979797" />
                                </a>
                                <a href="#" target="_blank" className="FacebookIcon">
                                    <FacebookLogo size={25} weight="bold" color="#979797" />
                                </a>
                                <a href="#" target="_blank" className="InstagramIcon">
                                    <InstagramLogo size={25} weight="bold" color="#979797" />
                                </a>
                                <a href="#" target="_blank" className="XIcon">
                                    <XLogo size={25} weight="bold" color="#979797" />
                                </a>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </section>
    )
}
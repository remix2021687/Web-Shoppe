import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Scrollbar } from "swiper/modules";
import { assets } from "../../../../assets/assets";


export const ProductPageViewer = () => {
    const [thumbsGallery, setThumbsGallery] = useState(null);
    
    return (
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
                    scrollbar={{
                        hide: false
                    }}
                    modules={[Thumbs, Scrollbar]}
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
    )
}
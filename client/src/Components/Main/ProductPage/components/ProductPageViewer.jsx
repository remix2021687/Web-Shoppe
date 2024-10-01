import { useState, useContext } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, Scrollbar } from "swiper/modules";
import { assets } from "../../../../assets/assets";
import { ProductPageViewerContext } from "../ProductPage";


export const ProductPageViewer = () => {
    const [thumbsGallery, setThumbsGallery] = useState(null);
    const imgList = useContext(ProductPageViewerContext);

    return (
        <section className="ProductPage_viewer">
            <section className="ProductPage_viewer_children">
                <Swiper
                    onSwiper={setThumbsGallery}
                    spaceBetween={5}
                    slidesPerView={4}
                    modules={[Thumbs]}
                >
                    {
                        imgList ?
                        imgList.map((data) => 
                            <SwiperSlide key={data.id}>
                                <img src={data.url} alt={data.name} />
                            </SwiperSlide>
                        )
                        :
                        null
                    }
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
                    {
                        imgList ?
                        imgList.map((data) => 
                            <SwiperSlide key={data.id}>
                                <img src={data.url} alt={data.name} />
                            </SwiperSlide>
                        )
                        :
                        null
                    }
                </Swiper>
            </section>    
        </section>
    )
}
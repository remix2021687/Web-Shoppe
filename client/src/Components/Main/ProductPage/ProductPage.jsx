import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";

export const ProductPage = () => {
    const [thumbsGallery, setThumbsGallery] = useState(null);

    useEffect(() => {
        document.title = 'SHOPPE | Name'
    }, [])

    return (
        <section className="ProductPage">
            <section className="ProductPage_viewer">
                <section className="ProductPage_viewer_children">

                </section>

                <section className="ProductPage_viewer_parent">
                    <Swiper
                        onSwiper={setThumbsGallery}
                        spaceBetween={5}
                        slidesPerView={4}

                        modules={[Thumbs]}
                    >

                    </Swiper>
                </section>
            </section>
        </section>
    )
}
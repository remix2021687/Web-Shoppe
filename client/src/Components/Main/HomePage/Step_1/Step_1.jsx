import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom'

export const Step_1 = () => {
    return (
        <section className="Step_1">
            <Swiper
                modules={[Autoplay, Pagination]}

                spaceBetween={0}
                // centeredSlides={true}
                pagination={{
                    enabled: true,
                    type: 'bullets',
                    bulletClass: 'BulletDef',
                    bulletActiveClass: 'BulletDefActive'
                }}

                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                
            >
                <SwiperSlide>
                    <section className='SwiperSlide_content'>
                        <header className='SwiperSlide_content_header'>
                            <h1>Gold big hoops</h1>
                            <h3>$ 68,00</h3>
                        </header>

                        <NavLink>View Product</NavLink>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='SwiperSlide_content'>
                        <header className='SwiperSlide_content_header'>
                            <h1>Gold big hoops</h1>
                            <h3>$ 68,00</h3>
                        </header>

                        <NavLink>View Product</NavLink>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='SwiperSlide_content'>
                        <header className='SwiperSlide_content_header'>
                            <h1>Gold big hoops</h1>
                            <h3>$ 68,00</h3>
                        </header>

                        <NavLink>View Product</NavLink>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='SwiperSlide_content'>
                        <header className='SwiperSlide_content_header'>
                            <h1>Gold big hoops</h1>
                            <h3>$ 68,00</h3>
                        </header>

                        <NavLink>View Product</NavLink>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='SwiperSlide_content'>
                        <header className='SwiperSlide_content_header'>
                            <h1>Gold big hoops</h1>
                            <h3>$ 68,00</h3>
                        </header>

                        <NavLink>View Product</NavLink>
                    </section>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
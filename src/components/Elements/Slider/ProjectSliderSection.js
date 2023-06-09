import React, { Component } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import Link from 'next/link';

class ProjectSlider extends Component {

    render() {

        return (
            <div className="project-active swiper-container">
                <div className="swiper-wrapper">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplaydisableoninteraction={"false"}
                    loop={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        }
                    }}
                    autoplay= {{
                        delay: 3000,
                        disableOnInteraction: true
                    }}
                    navigation={{
                        clickable: true,
                        nextEl: '.project-button-next',
                        prevEl: '.project-button-prev',
                   }}
                >
                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="assets/img/img10.jpg" className="img-fluid" alt="project_img"/>
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Graphic</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i className="far fa-long-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="assets/img/img20.jpg" className="img-fluid" alt="project_img"/>
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Web Design</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i className="far fa-long-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="assets/img/img21.jpg" className="img-fluid" alt="project_img"/>
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Web Development</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i className="far fa-long-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="assets/img/img10.jpg" className="img-fluid" alt="project_img"/>
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Networking</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i className="far fa-long-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="assets/img/img20.jpg" className="img-fluid" alt="project_img"/>
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Graphic</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i className="far fa-long-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="assets/img/img21.jpg" className="img-fluid" alt="project_img"/>
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Web Design</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i className="far fa-long-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="kproject swiper-slides">
                            <img src="assets/img/img20.jpg" className="img-fluid" alt="project_img"/>
                            <div className="kproject-text">
                                <div className="kproject-text-content">
                                    <span>Web Devolopment</span>
                                    <h5 className="kproject-text-title"><Link href="/project-details"><a>Fimlor Experience</a></Link></h5>
                                </div>
                                <div className="kproject-text-icon">
                                    <Link href="/project-details"><a><i className="far fa-long-arrow-right"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
            </div>
        );
    }
}

export default ProjectSlider;
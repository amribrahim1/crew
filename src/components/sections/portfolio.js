import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import ReactPlayer from 'react-player';

// // Import Swiper styles
import '../../../node_modules/swiper/swiper.scss';
// import '../../../node_modules/swiper/components/scrollbar/scrollbar.scss';
// import '../../../node_modules/swiper/components/controller/controller.scss';
// import '../../../node_modules/swiper/components/a11y/a11y.scss';
// import '../../../node_modules/swiper/components/effect-coverflow/effect-coverflow.scss';
// import '../../../node_modules/swiper/components/effect-cube/effect-cube.scss';
// import '../../../node_modules/swiper/components/effect-fade/effect-fade.scss';
// import '../../../node_modules/swiper/components/effect-flip/effect-flip.scss';
// import '../../../node_modules/swiper/components/lazy/lazy.scss';
import '../../../node_modules/swiper/components/navigation/navigation.scss';
// import '../../../node_modules/swiper/components/pagination/pagination.scss';
// import '../../../node_modules/swiper/components/thumbs/thumbs.scss';
// import '../../../node_modules/swiper/components/zoom/zoom.scss';

SwiperCore.use([Navigation, Pagination]);

class Portfolio extends Component {
    state = {
        swiper: {},
        index: 0,
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        titles: [
            "GLAMOUR QUEEN",
            "ATHLETE CLASS",
            "GOTI SAAB",
            "LADY IN WHITE",
            "CREATIVE FUTURE",
            "ANTIQUE CHOICE",
            "KALASHAKALA",
            "WILD LIFE",
            "FOREST HOUSE"
        ],
        subtitles: [
            "Photography",
            "Photography",
            "Video",
            "Design",
            "Design",
            "Photography",
            "Design",
            "Photography",
            "Architecture"
        ]
    }
    
    handleSwiper = swiper => {
        // console.log(swiper)
        this.setState({swiper})
    }

    changeIndex = (index) => {
        let state = this.state;
        state.index = index;
        state[index] = true;
        this.setState({state})
        this.state.swiper.slideTo(index)
    }
    
    render() {
        // console.log(this.state);
        
        return (
            <div id="content-scroll">
                <div id="showcase-holder">
                    <div id="showcase-tilt-wrap">
                        <div id="showcase-tilt">
                            <div id="overlay"></div>
                            <Swiper
                                dottedOverlay= 'twoxtwo'
                                dots= "swiper-thumbnails"
                                slidesPerView={1}
                                onSlideChange={(swiper) => this.changeIndex(swiper.activeIndex)}
                                onSwiper={(swiper) => this.handleSwiper(swiper)}
                                direction= 'vertical'
                                loop= {false}
                                simulateTouch = {false}
                                resistance = {true}
                                resistanceRatio = "0"
                                speed={1200}
                                autoplay= {false}
                                mousewheel= {false}
                                pagination= {{
                                    el: '.showcase-pagination',
                                    clickable: false,
                                    renderBullet: (index, className) => {
                                        return `
                                            <div class="tab__link ${className}">
                                                
                                                    <div class="counter">0${index+1}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;09</div>
                                                <div>
                                                    <div class="subtitle">${this.state.subtitles[index]}</div>
                                                    <div class="title">${this.state.titles[index]}</div>
                                                </div>
                                            </div>`
                                        ;
                                    },
                                }}
                                navigation= {{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                            >
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                                        className=""
                                        src="./parallax/img/project1.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                                        className=""
                                        src="./parallax/img/project2.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='parallax/Videos/GOTI SAAB.mp4' playing muted loop className="myVideo" style={{width: "100%", height: "auto"}} />
                                    </div>
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide> : <SwiperSlide className="" style={{height: "13px"}}></SwiperSlide>}
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                        src="./parallax/img/project4.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                                        className=""
                                        src="./parallax/img/project5.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                                        className=""
                                        src="./parallax/img/project6.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                                        className=""
                                        src="./parallax/img/project7.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                                        className=""
                                        src="./parallax/img/project8.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                                <SwiperSlide className="" style={{height: "13px"}}>
                                    <img
                                        className=""
                                        src="./parallax/img/project9.png"
                                        alt=""
                                    />
                                    <div className="img-mask" style={{transition: "all 0ms ease 0s"}}>
                                        <div className="section-image" style={{}}></div>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="showcase-pagination-wrap">
                        <div className="showcase-counter">
                            <span data-total="09">09</span>
                        </div>
                        <div className="showcase-pagination"></div>
                        <div className="caption-border left"></div>
                        <div className="caption-border right"></div>
                        <div className="arrows-wrap ">
                            <div className="prev-wrap animated-wrap"><div className="swiper-button-prev swiper-button-white parallax-element animated-element"></div></div>
                            <div className="next-wrap animated-wrap"><div className="swiper-button-next swiper-button-white parallax-element animated-element"></div></div>
                        </div>
                    </div>
                </div>
                <div className="swiper-thumbnails link">
                    <button onClick={() => this.changeIndex(0)} className={this.state.index === 0 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb1.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(1)} className={this.state.index === 1 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb2.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(2)} className={this.state.index === 2 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb3.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(3)} className={this.state.index === 3 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb4.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(4)} className={this.state.index === 4 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb5.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(5)} className={this.state.index === 5 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb6.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(6)} className={this.state.index === 6 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb7.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(7)} className={this.state.index === 7 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb8.png" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(8)} className={this.state.index === 8 ? "bullet is-active" : "bullet"}><img src="parallax/img/portfolio-thumb9.png" alt="img" /> </button>
                </div>
            </div>
        );
    }
}

export default Portfolio;
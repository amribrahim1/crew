import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import ReactPlayer from 'react-player';

// // Import Swiper styles
import '../../../../node_modules/swiper/swiper.scss';
// import '../../../node_modules/swiper/components/scrollbar/scrollbar.scss';
// import '../../../node_modules/swiper/components/controller/controller.scss';
// import '../../../node_modules/swiper/components/a11y/a11y.scss';
// import '../../../node_modules/swiper/components/effect-coverflow/effect-coverflow.scss';
// import '../../../node_modules/swiper/components/effect-cube/effect-cube.scss';
// import '../../../node_modules/swiper/components/effect-fade/effect-fade.scss';
// import '../../../node_modules/swiper/components/effect-flip/effect-flip.scss';
// import '../../../node_modules/swiper/components/lazy/lazy.scss';
import '../../../../node_modules/swiper/components/navigation/navigation.scss';
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
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        titles: [
            "موبايلي",
            "مشروع تطوير جدة",
            "موبايلي",
            "Pride of Jamhour",
            "الدوري السعودي الالكتروني للمحترفين",
            "الدوري السعودي الالكتروني للمحترفين",
            "برنامج تطوير الخريجين",
            "برنامج تطوير الخريجين",
            "بيبان الشرقية",
            "بيبان المدينة",
            "الهيئة السعودية للمواصفات والمقاييس والجودة",
            "بنك البلاد",
            "بيبان المدينة",
        ],
        subtitles: [
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
            "فيديو",
        ],
        muted: {
            0: true,
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true,
            9: true,
            10: true,
            11: true,
            12: true,
        }
    }
    
    handleSwiper = swiper => {
        // console.log(swiper)
        this.setState({swiper})
    }

    changeIndex = (index) => {
        this.state.swiper.slideTo(index);
        let state = this.state;
        state.index = index;
        state[index] = true;
        this.setState({state});
        state[this.state.swiper.previousIndex] = false;
        setTimeout(
            () => this.setpreviousFalse(this.state.swiper.previousIndex), 
            1000
        );
    }
    setpreviousFalse = index => {
        let state = this.state;
        state[index] = false;
        this.setState({state});
    }

    toggleMute = (index) => {
        let muted = this.state.muted;
        muted[index] = !muted[index]
        this.setState({muted})
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
                                style={{height: "100vh"}}
                                dottedoverlay= 'twoxtwo'
                                autoHeight= {true}
                                spaceBetween= {0}
                                updateOnWindowResize= {true}
                                parallax= {true}
                                lazy= {true}
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
                                                    <div class="counter">${index<9 ? "0" : ""}${index+1}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;13</div>
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
                                {this.state[0] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        {/* <iframe src="https://www.youtube.com/embed/cHy7gBcn-iE?autoplay=1&mute=1&loop=1&controls=0&disablekb=1&playlist=cHy7gBcn-iE" controls="0" width="100%" height="100%"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"></iframe> */}
                                        {/* <iframe title="vimeo-player" allow="autoplay; fullscreen" src="https://player.vimeo.com/video/539354793?background=1&autoplay=1&muted=1&loop=1&controls=0&autopause=0" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe> */}
                                        <ReactPlayer url='https://www.youtube.com/embed/cHy7gBcn-iE?autoplay=1&loop=1&controls=0&disablekb=1&playlist=cHy7gBcn-iE' width="100%" height="100%" playing muted={this.state.muted[0]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(0)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[0]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[1] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        {/* <iframe title="vimeo-player" allow="autoplay; fullscreen" src="https://player.vimeo.com/video/539354793?background=1&autoplay=1&muted=1&loop=1&controls=0&autopause=0" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe> */}
                                        <ReactPlayer url='https://www.youtube.com/embed/ZNlTJEZS_mQ?autoplay=1&loop=1&controls=0&disablekb=1&playlist=ZNlTJEZS_mQ' width="100%" height="100%" playing muted={this.state.muted[1]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(1)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[1]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[2] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                    <ReactPlayer url='https://www.youtube.com/embed/uHbZBrsi7r0?autoplay=1&loop=1&controls=0&disablekb=1&playlist=uHbZBrsi7r0' width="100%" height="100%" playing muted={this.state.muted[2]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(2)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[2]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[3] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/CleTILrSv1U?autoplay=1&loop=1&controls=0&disablekb=1&playlist=CleTILrSv1U' width="100%" height="100%" playing muted={this.state.muted[3]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(3)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[3]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[4] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/MhG6d4eiRfQ?autoplay=1&loop=1&controls=0&disablekb=1&playlist=MhG6d4eiRfQ' width="100%" height="100%" playing muted={this.state.muted[3]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(3)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[4]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[5] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/MhG6d4eiRfQ?autoplay=1&loop=1&controls=0&disablekb=1&playlist=MhG6d4eiRfQ' width="100%" height="100%" playing muted={this.state.muted[5]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(5)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[5]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[6] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/H0R7uhBRJcE?autoplay=1&loop=1&controls=0&disablekb=1&playlist=H0R7uhBRJcE' width="100%" height="100%" playing muted={this.state.muted[6]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(6)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[6]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                
                                {this.state[7] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/BfQUpDWth_I?autoplay=1&loop=1&controls=0&disablekb=1&playlist=BfQUpDWth_I' width="100%" height="100%" playing muted={this.state.muted[7]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(7)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[7]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[8] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/AI6LImNjzLg?autoplay=1&loop=1&controls=0&disablekb=1&playlist=AI6LImNjzLg' width="100%" height="100%" playing muted={this.state.muted[8]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(8)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[8]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[9] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/u_M3gVrxKQ0?autoplay=1&loop=1&controls=0&disablekb=1&playlist=u_M3gVrxKQ0' width="100%" height="100%" playing muted={this.state.muted[9]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(9)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[9]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[10] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/K9yyMsFZ7ME?autoplay=1&loop=1&controls=0&disablekb=1&playlist=K9yyMsFZ7ME' width="100%" height="100%" playing muted={this.state.muted[10]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(10)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[10]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[11] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/cOBivI45OD0?autoplay=1&loop=1&controls=0&disablekb=1&playlist=cOBivI45OD0' width="100%" height="100%" playing muted={this.state.muted[11]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(11)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[11]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                                {this.state[12] ? <SwiperSlide className="" style={{maxHeight: "100vh"}}>
                                    <div className="img-mask">
                                        <ReactPlayer url='https://www.youtube.com/embed/qpomtIzPbeo?autoplay=1&loop=1&controls=0&disablekb=1&playlist=qpomtIzPbeo' width="100%" height="100%" playing muted={this.state.muted[12]} loop className="myVideo" />
                                        <svg version="1.1" id="Capa_1" x="0px" y="0px" onClick={() => this.toggleMute(12)} viewBox="0 0 448.075 448.075" style={{enableBackground:"new 0 0 448.075 448.075"}}>
                                            {this.state.muted[12]
                                                ?   <>
                                                        <path d="M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"/>
                                                        <path d="M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376
                                                            c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48
                                                            c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672
                                                            c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"/>
                                                    </>
                                                :   <>
                                                        <path d="M288,192c0-37.653-21.76-70.187-53.333-85.867v171.84C266.24,262.187,288,229.653,288,192z"/>
                                                        <polygon points="0,128 0,256 85.333,256 192,362.667 192,21.333 85.333,128 			"/>
                                                        <path d="M234.667,4.907V48.96C296.32,67.307,341.333,124.373,341.333,192S296.32,316.693,234.667,335.04v44.053
                                                        C320.107,359.68,384,283.413,384,192S320.107,24.32,234.667,4.907z"/>
                                                    </>
                                            }
                                        </svg>
                                    </div>
                                    
                                    {/* <a className="showcase-link-project" data-type="page-transition" href="project01.html"></a> */}
                                </SwiperSlide>  : <SwiperSlide></SwiperSlide>}
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    <div className="showcase-pagination-wrap">
                        <div className="showcase-counter">
                            <span data-total="09">13</span>
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
                    <button onClick={() => this.changeIndex(0)} className={this.state.index === 0 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/11_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(1)} className={this.state.index === 1 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/15_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(2)} className={this.state.index === 2 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/12_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(3)} className={this.state.index === 3 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/08_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(4)} className={this.state.index === 4 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/20_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(5)} className={this.state.index === 5 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/21_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(6)} className={this.state.index === 6 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/07_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(7)} className={this.state.index === 7 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/06_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(8)} className={this.state.index === 8 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/24_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(9)} className={this.state.index === 9 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/10_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(10)} className={this.state.index === 10 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/05_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(11)} className={this.state.index === 11 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/26_cover.jpg" alt="img" /> </button>
                    <button onClick={() => this.changeIndex(12)} className={this.state.index === 12 ? "bullet is-active" : "bullet"}><img src="parallax/img/thumbnails/25_cover.jpg" alt="img" /> </button>
                </div>
            </div>
        );
    }
}

export default Portfolio;
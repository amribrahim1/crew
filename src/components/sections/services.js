import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

class Services extends Component {
    render() {
        return (
            <div className="pp-tableCell">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-md-7 my-auto services-content">
                            <OwlCarousel
                                className='owl-theme'
                                dots
                                items={1}
                                mouseDrag={false}
                                nav={false}
                                loop
                                animateOut={'fadeOut'}
                                animateIn={'fadeIn'}
                                autoplay
                            >
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Branding and Themes</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We will utilize your event to show your brand in a creative concept</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Creative and Concept</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft"> We can design a creative event concept that will seeks to play on the imagination of your target group</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Printing</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We can handle all aspects of your event High quality and affordable printed</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Branded Gifts</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We specialize in Corporate Gifts that stand out from the crowd, with products and packaging that represents you and that you will be remembered by</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Decoration</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We have transformed many venues into original works of art specially created for your event. Everything you need from executive furniture for event to beautiful banqueting tables and place settings for your event </p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Lighting</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">Your event location can be enhanced with spectacular lighting, audiovisual equipment and staging. Specializing in stage lighting, sound systems, laptop and tech rental. They will tailor your event audio visual requirements to every event no matter how big or small the event</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Screens</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">Our talents will design the right screen setup and dimension of your event, with professional led screens rental functions and scales</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Registration System</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">The registration process is realized in steps. The Registration module allows for easy and flexible configuration of the entire process</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Media Coverage</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">Capture your event for you and your guests with preferred photography, videography and editing services guaranteed to focus on every detail. Be sure to expose you event on social media to share the highlights</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Streaming</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We are developing and executing live event solutions that enhance your event's audience experience </p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Translation</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We offer online translation</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Catering</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We offer full-service of corporate catering package which includes event setup, choice of venue, plus venue styling</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Entertainment Shows</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We offer over 50 acts to choose from, they provide all types of entertainment to jazz up your party and spice up your event</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Venues</h1>
                                    <div  className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">We can design a creative event concept that will seeks to play on the imagination of your target group </p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Media Production</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">Make your event at our flagship venue Senate House spectacular with our interior or exterior large scale and 30 projection services</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Hologram shows</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">Looking into the future, we are making our efforts to create a world-class high-end display product helping your business achieve market growth</p>
                                </div>
                                <div className="services-item item text-center text-md-left">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">Ushers</h1>
                                    <div className="testimonial-line"></div>
                                    <p data-aos="fade-left" className="mb-5 per-slide text-white wow fadeInLeft">Female and male ushers are here for you </p>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services
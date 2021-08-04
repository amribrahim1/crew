import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class About extends Component {
    state = {
        index: 0,
        intervals: [
            11000,
            5000,
            11000,
            5000,
            5000,
            9000,
            13000,
            11000,
            11000,
            9000,
        ],
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        backgrounds: {
            wide: [
                "parallax/img/01w.jpeg",
                "parallax/img/06w.jpeg",
                "parallax/img/09w.jpeg",
                "parallax/img/01w.jpeg",
                "parallax/img/06w.jpeg",
                "parallax/img/04w.jpeg",
                "parallax/img/11w.jpeg",
                "parallax/img/13w.jpeg",
                "parallax/img/14w.jpeg",
                "parallax/img/15w.jpeg",
            ],
            high: [
                "parallax/img/01a.jpeg",
                "parallax/img/06a.jpeg",
                "parallax/img/09a.jpeg",
                "parallax/img/01a.jpeg",
                "parallax/img/06a.jpeg",
                "parallax/img/04a.jpeg",
                "parallax/img/11a.jpeg",
                "parallax/img/13a.jpeg",
                "parallax/img/14a.jpeg",
                "parallax/img/15a.jpeg",
            ]
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props.out === true) {
                this.setState({
                    intervals: [
                        99999999999,
                        99999999999,
                        99999999999,
                        99999999999,
                        99999999999,
                        99999999999,
                        99999999999,
                        99999999999,
                        99999999999,
                        99999999999,
                    ]
                });
            } else {
                this.setState({
                    intervals: [
                        11000,
                        5000,
                        11000,
                        5000,
                        5000,
                        9000,
                        13000,
                        11000,
                        11000,
                        9000,
                    ]
                });
            }
        }
    }

    setImgSrc = index => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        if (w>h) {
            return this.state.backgrounds.wide[index]
        } else {
            return this.state.backgrounds.high[index]
        }
    }
    
    handleOnSlide = e => {
        let state = this.state;
        state[e] = true;
        this.setState({state})
    }
    
    render() {
        return (
            <Carousel
                className="about-carousel"
                onSlide = {(e) => this.handleOnSlide(e)}
                pause={false}
                controls={false}
            >
                <Carousel.Item interval={this.state.intervals[0]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG rev-slidebg" src={this.setImgSrc(0)} alt="ABOUT" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content1">
                            <div>
                                <span>ABOUT</span>  <img style={{height: "10vh", width: "auto", verticalAlign:"middle", marginTop: "1%"}} src="parallax/img/logo.svg" alt="logo" />
                            </div>
                            <p><br/>From Riyadh, the heart and capital of the kingdom of Saudi Arabia, we established the <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> for event & media production and logistic support. <br/> By our successful team and the trust of our customers who have supported us since our first step, we have</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[1]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(1)} alt="ENTERTAINMENT SHOW" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content2">
                            &nbsp; &nbsp;ENTERTAINMENT SHOW<br/>
                            <span className="abut-content2span1">VENUES</span><br/> 
                            <span className="abut-content2span2">MEDIA PRODUCTION</span> 
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[2]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(2)} alt="CREATE INSPIRATION" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content3"  >
                            <div>CREATE <br/>
                                <span style={{color: "#ffff00"}}>INSPIRATION</span> 
                            </div>
                            <p>
                                We offer over 50 acts to choose from, they
                                provide all types of entertainment to jazz up
                                your party and spice up your event.
                                When it comes to venues and where you will
                                host your event, our team will contact
                                different venue providers to make sure we
                                find the perfect place for your perfect event.<br/>
                                Finally, Make your event at our flagship venue
                                Senate House spectacular with our interior
                                and exterior large scale projection services</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[3]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(3)} alt="EVENT MANAGEMENT" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content4"   >
                            <div>
                                <span className="abut-content4Span1">EVENT</span><br/> 
                                <span className="abut-content4Span2">MANAGEMENT</span> 
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[4]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(4)} alt="CREATVE & CONCEPT" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content5"  >
                            <div>
                                CREATVE & CONCEPT<br/>
                                <span className="abut-content5Span1">PRODUCTION</span><br/> 
                                <span className="abut-content5Span2">BRANDING & THEMES</span> 
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[5]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(5)} alt="IMAGINATION" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content6"  >
                            <div>
                                <span className="abut-content6Span1">&nbsp;&nbsp;IMAGINATION</span><br/>
                                <span className="abut-content6Span2">&nbsp;HAS NO</span> 
                                <br/> LIMITS 
                            </div>
                            <p>
                                We all come together to produce the perfect idea and
                                concept that will best suit your event requirements.<br/>
                                From there, our creative wizards communicate with
                                our production team to to turn idea into reality,
                                making sure that we utilize your event to present your
                                brand within a creative theme.
                                </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[6]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(6)} alt="PRODUCTION SERVICES" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content7" >
                            <div>PRODUCTION <br/> 
                                <span className="abut-content7Span1">SERVICES</span>
                            </div>
                            <p>
                                <br/>
                                In this phase it is key to keep planning ahead of the daily
                                shoot. The primary aim is to stick to the budget and
                                schedule, this requires constant vigilance.<br/><br/>
                                More <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> will be recruited at this stage, such as the
                                property master, script supervisor, assistant directors,
                                stills photographer, picture editor, and sound editors.
                                These are just the most common roles in filmmaking; the
                                production office will be free to create any unique blend of
                                roles to suit the various responsibilities possible during
                                the production of a film. Communication is key between
                                the location, set, office, production company, distributors
                                and all other parties involved.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[7]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(7)} alt="LET THE WORLD KNOW" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content8">
                            <div >LET THE WORLD <br/> 
                                <span className="abut-content8Span1">KNOW</span> 
                            </div>
                            <p>
                                whether you want to further expose your
                                products, or want to build up your brand from
                                scratch, and anything in between, rest assure
                                that <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> has a dedicated team of professionals
                                who will take it to the next level.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[8]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(8)} alt="MOTION GRAPHICS" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content9"  >
                            <div>MOTION <br/> 
                                <span className=" abut-content9Span1">GRAPHICS</span> 
                            </div>
                            <p>
                                <br/>
                                When it is time to set things in motion and tell
                                your story throuh an animation, <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> has some
                                really talented artist who will turn any message or
                                story into an eye catching animation.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[9]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(9)} alt="INFO GRAPHICS" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content10" >
                            <div>INFO <br/> 
                                <span className="abut-content10Span1">GRAPHICS</span> 
                            </div>
                            <p>
                                <br/>
                                Data is extremely important for you and your
                                clients, therefore we wanted to add a team of
                                specialists to our <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" />, to assure that all your
                                requirements are covered in one place.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default About
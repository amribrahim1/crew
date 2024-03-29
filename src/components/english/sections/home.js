import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {
	state = {
        index: 0,
        interval: 9000,
        intervals: [
            11000,
            13000,
            11000,
            11000,
            11000,
            11000,
            11000,
        ],
        0: true,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        backgrounds: {
            wide: [
                "parallax/img/18wf.jpeg",
                "parallax/img/05w.jpeg",
                "parallax/img/02w.jpeg",
                "parallax/img/12w.jpeg",
                "parallax/img/07w.jpeg",
                "parallax/img/03w.jpeg",
                "parallax/img/08w.jpeg",
            ],
            high: [
                "parallax/img/18af.jpeg",
                "parallax/img/05a.jpeg",
                "parallax/img/02a.jpeg",
                "parallax/img/12a.jpeg",
                "parallax/img/07a.jpeg",
                "parallax/img/03a.jpeg",
                "parallax/img/08a.jpeg",
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
                    ]
                });
            } else {
                this.setState({
                    intervals: [
                        11000,
                        13000,
                        11000,
                        11000,
                        11000,
                        11000,
                        11000,
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
        this.setState({
            index: e,
            state
        });
    }
    
    render() {
        // console.log(this.state)
        return ( 
            <Carousel
                className="home-carousel"
                fade
                onSlide = {(e) => this.handleOnSlide(e)}
                pause={false}
                // interval={this.state.interval}
            >
                 <Carousel.Item interval={this.state.intervals[0]} className="carousel-home-item carousel-story">
                    <img src={this.setImgSrc(0)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption story-caption">
                        <div className="title">
                            <div className="title-white">SUCCESS</div>
                            <div className="title-yellow">STORY</div>
                        </div>
                        
                        <div className="description">
                            Through the support and trust our clients have put in us, and by the hands of our talnted and dedicated team, we achieved a wide spread of success <br/> within a short time frame. <br/> Today we are one of the fastest growing <br/> companies in the field, and our passion <br/> for success drives us to achieve <br/> more and more every single day.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item interval={this.state.intervals[1]} className="carousel-home-item carousel-light">
                    <img src={this.setImgSrc(1)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption light-caption">
                        <div className="title">
                            <div className="title-white">LET YOUR LIGHT</div>
                            <div className="title-yellow">SHINE</div>
                        </div>
                        
                        <div className="description">
                            We have transformed many venues into original works of art specially created for our clients. Everything you need from executive furniture to beautiful banqueting tables and place settings for your event will be covered by our team.
                            <br/><br/>
                                We will setup your event with spectacular lighting,
                                audiovisual equipment and staging. Specializing in
                                stage lighting, sound systems, computer softwares
                                and the latest tech, the look and feel of your event will
                                be special tailored just for you.
                                Our team will design the right screen setup and
                                dimensions for your event, with professional led
                                screens rental functions and scales
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item interval={this.state.intervals[2]} className="carousel-home-item carousel-family">
                    <img src={this.setImgSrc(2)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption family-caption">
                        <div className="title">
                            <div className="title-white">THE <img style={{height: "7vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /></div>
                            <div className="title-yellow">FAMILY</div>
                        </div>
                        
                        <div className="description">
                            even though the word crew really means team...
                            at <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> we actually are more of a family than just
                            teammates. We differ in experience, nationalities,
                            languages, colors &amp; traditions, but inside and
                            outside the office we all become one, and we all
                            agree on success.
                            <br/>
                            Many of the most experienced and distinguished
                            talents in the field of organizing events, program
                            production, advertising, documentary, television
                            directing, scriptwriters and logistical support, are
                            Joining our family.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item interval={this.state.intervals[3]} className="carousel-home-item carousel-services">
                    <img src={this.setImgSrc(3)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption services-caption">
                        <div className="title">
                            <div className="title-white">POST-PRODUCTION</div>
                            <div className="title-yellow">SERVICES</div>
                        </div>
                        
                        <div className="description">
                            In filmmaking and video production, pre-production
                            formally begins once a project has been greenlit. At
                            this stage, finalizing preparations for production go
                            into effect.<br/><br/>
                            
                                During pre-production, the script is broken down
                                into individual scenes with storyboards and all the
                                locations, props, cast members, costumes, special
                                effects and visual effects are identified.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item interval={this.state.intervals[4]} className="carousel-home-item carousel-communication">
                    <img src={this.setImgSrc(4)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption communication-caption">
                        <div className="title">
                            <div className="title-white">THE ART OF</div>
                            <div className="title-yellow">COMMUNICATION</div>
                        </div>
                        
                        <div className="description">
                            In filmmaking and video production, pre-production
                            formally begins once a project has been greenlit. At
                            this stage, finalizing preparations for production go
                            into effect.<br/><br/>
                            
                                During pre-production, the script is broken down
                                into individual scenes with storyboards and all the
                                locations, props, cast members, costumes, special
                                effects and visual effects are identified.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item interval={this.state.intervals[5]} className="carousel-home-item carousel-logo">
                    <img src={this.setImgSrc(5)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption logo-caption">
                        <div className="title">
                            <div className="title-white">THE <img style={{height: "7vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /></div>
                            <div className="title-yellow">LOGO</div>
                        </div>
                        
                        <div className="description">
                            At a time were technology occupies the first
                            position, while the human element shrinks and
                            retracts, we chose to raise a slogan that
                            distinguishes us from others. Our name is our
                            slogan, <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> describes that our team is the first
                            thing that distinguishes us, we use a word from a
                            few letters, but it has a far deaper meaning and
                            value, such as <span style={{fontWeight: 900, color: "rgb(255, 255, 0)", transition: "none 0s ease 0s", textAlign: "inherit", lineHeight: "26px", borderWidth: "0px", margin: "0px", padding: "0px", letterSpacing: "0px", fontSize: "18px"}}>we - together - all of us .</span><br/><br/>
                            
                                At <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" />, we do our best to be at the forefront of
                                companies that work in the fields of organizing
                                events, media production and logistical support.
                            
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                 <Carousel.Item interval={this.state.intervals[6]} className="carousel-home-item carousel-future">
                    <img src={this.setImgSrc(6)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption future-caption">
                        <div className="title">
                            <div className="title-white">CREATE YOUR OWN</div>
                            <div className="title-yellow">FUTURE</div>
                        </div>
                        
                        <div className="description">
                            Looking into the future, we are making our efforts to create a
                            world-class high-end display product helping your business
                            achieve market growth.<br/>
                                We also provide female and male ushers services, as well as Plan
                                and manage your needs to finest detail. Our offering involves
                                everything from logistics, staffing and needs management
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>                
        )
    }
}

export default Home
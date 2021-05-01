import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ArHome extends Component {
	state = {
        index: 0,
        interval: 99999999999,
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
                "parallax/img/05wf.jpeg",
                "parallax/img/02wf.jpeg",
                "parallax/img/12wf.jpeg",
                "parallax/img/07wf.jpeg",
                "parallax/img/03wf.jpeg",
                "parallax/img/08wf.jpeg",
            ],
            high: [
                "parallax/img/18af.jpeg",
                "parallax/img/05af.jpeg",
                "parallax/img/02af.jpeg",
                "parallax/img/12af.jpeg",
                "parallax/img/07af.jpeg",
                "parallax/img/03af.jpeg",
                "parallax/img/08af.jpeg",
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
        this.setState({state})
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
                    <img src={this.setImgSrc(0)} alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="tp-caption tp-resizeme carousel-home-caption story-caption">
                        <div className="title">
                            <div className="title-white">قصة</div>
                            <div className="title-yellow">نجاح</div>
                        </div>
                        
                        <div className="description">
                            من خلال الدعم والثقة التي وضعها عملاؤنا فينا <br/>
                            وعلى أيدي فريقنا الموهوب والمتفاني،<br/>
                            حققنا انتشارًا واسعًا للنجاح
                            في غضون فترة زمنية قصيرة.<br/>
                            اليوم نحن من أسرع الشركات نموا
                            في المجال،
                            <br/>وشغفنا للنجاح يدفعنا إلى تحقيق<br/>
                            أكثر وأكثر كل يوم.                        
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[1]} className="carousel-home-item carousel-light">
                    <img src={this.setImgSrc(1)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption light-caption">
                        <div className="title">
                            <div className="title-white">دع نورك</div>
                            <div className="title-yellow">يشع</div>
                        </div>
                        
                        <div className="description">
                            لقد قمنا بتحويل العديد من الأماكن إلى أعمال فنية أصيلة تم إنشاؤها خصيصًا لعملائنا.<br/>
                            سيغطي فريقنا كل ما تحتاجه من الأثاث التنفيذي إلى طاولات المآدب الجميلة وإعدادات المكان لمناسبتك.
                            <br/>
                            سنقوم بإعداد الحدث الخاص بك بإضاءة ومعدات سمعية وبصرية وعرض مسرحي مذهل. متخصصون في إضاءة المسرح وأنظمة الصوت وبرامج الكمبيوتر سوف يستخدمون أحدث التقنيات للوصول بحدثك للعالمية ، سيكون شكل ومظهر الحدث الخاص بك مصممًا خصيصًا لك. سيقوم فريقنا بتصميم وإعداد الشاشات بالأبعاد المناسبة لحدثك ، كما نقوم بتأجير شاشات LED الاحترافية
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[2]} className="carousel-home-item carousel-family">
                    <img src={this.setImgSrc(2)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption family-caption">
                        <div className="title">
                            <div className="title-white">عائلة</div>
                            <div className="title-yellow"><img style={{height: "7vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /></div>
                        </div>
                        
                        <div className="description">
                            في <img style={{height: "3vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> ، نحن في الواقع عائلة أكثر من مجرد
                             زملاء. نختلف في الخبرة والجنسيات
                             واللغات والألوان والتقاليد، ولكن في داخل و 
                             خارج المكتب ، نحن جميعا نكون فريقا واحدا يتفق على النجاح.
                            <br/>
                            تتميز عائلتنا بضمها لأفراد من ذوي الخبرة والتميز والموهبة  في مجالات تنظيم الفعاليات ، البرامج
                             الإنتاجية ، الإعلان ، الوثائقيات ، الإخراج التليفزيوني وكتابة السيناريو والدعم اللوجستي.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[3]} className="carousel-home-item carousel-services">
                    <img src={this.setImgSrc(3)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption services-caption">
                        <div className="title">
                            <div className="title-white">خدمات</div>
                            <div className="title-yellow">الإنتاج</div>
                        </div>
                        
                        <div className="description">
                            تبدأ خدمات الإنتاج سواء في صناعة الأفلام أو إنتاج الفيديو بمرحلة ما قبل الإنتاج.<br/><br/>
                            
                             وأثناء مرحلة ما قبل الإنتاج ، يتم تقسيم النص
                            في المشاهد الفردية مع القصص المصورة وجميع
                            المواقع ، والدعائم ، وأعضاء فريق التمثيل ، والأزياء ، والخاصة،
                            كما يتم تحديد المؤثرات الخاصة والمؤثرات البصرية.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[4]} className="carousel-home-item carousel-communication">
                    <img src={this.setImgSrc(4)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption communication-caption">
                        <div className="title">
                            <div className="title-white">فن</div>
                            <div className="title-yellow">الاتصالات</div>
                        </div>
                        
                        <div className="description">
                            يتمتع فريقنا بمهارات عالمية في فن الاتصالات،<br/> تبدأ من الاستماع باهتمام كبير لمتطلبات عملائنا وإثرائها بالأفكار بشرح الطرق والتكنولوجيا الكفيلة بتحقيق رغبات وأفكار عملائنا.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[5]} className="carousel-home-item carousel-logo">
                    <img src={this.setImgSrc(5)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption logo-caption">
                        <div className="title">
                            <div className="title-white">شعار</div>
                            <div className="title-yellow">فريق العمل</div>
                        </div>
                        
                        <div className="description">
                            لأننا نؤمن أن لا أحد يبلغ الكمال منفردا قررنا أن نتحرك كفريق يجمع بين أحدث مقومات التكنولوجيا ونبذة من الموهوبين، اخترنا أن نرفع شعارا يميزنا عن غيرنا،<br/>اسمنا هو شعارنا:
                            <img style={{height: "5vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" />
                            والذي يصف أن عملنا كفريق هو أول السمات التي تميزنا؛<br/>فـ<img style={{height: "5vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> على قلة أحرفها إلا أن لها قيمة ومعنى أعمق بكثير <br/>
                            {/* <span style={{direction:"ltr !important"}}>Nobody is perfect but as a <img style={{height: "5vh", width: "auto"}} src="parallax/img/logo.svg" alt="logo" /> we are.</span> */}
                            <span style={{fontFamily: '"Open Sans", sans-serif', fontWeight: 700, color: "rgb(255, 255, 0)", transition: "none 0s ease 0s", textAlign: "inherit", lineHeight: "26px", borderWidth: "0px", margin: "0px", padding: "0px", letterSpacing: "0px", fontSize: "22px"}}>Nobody is perfect but as a <img style={{height: "5vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> we are.</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[6]} className="carousel-home-item carousel-future">
                    <img src={this.setImgSrc(6)}  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption future-caption">
                        <div className="title">
                            <div className="title-white">اصنع</div>
                            <div className="title-yellow">مستقبلك</div>
                        </div>
                        
                        <div className="description">
                            بالنظر إلى المستقبل ، فإننا نبذل جهودنا لإنشاء 
                             عرض لمنتجك عالي الجودة من الطراز العالمي يساعدك على
                             تحقيق النمو<br/>
                             نحن نقدم أيضًا خدمات الاستشاريين من النساء أو الرجال ، بالإضافة إلى تخطيط وإدارة احتياجاتك بأدق التفاصيل. تشمل عروضنا كل شيء بدءًا من الخدمات اللوجستية والتوظيف وإدارة الاحتياجات.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>                
        )
    }
}

export default ArHome
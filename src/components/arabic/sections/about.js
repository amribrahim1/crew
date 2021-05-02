import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class About extends Component {
    state = {
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
        intervals: [
            13000,
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
        backgrounds: {
            wide: [
                "parallax/img/01wf.jpeg",
                "parallax/img/06wf.jpeg",
                "parallax/img/09wf.jpeg",
                "parallax/img/01wf.jpeg",
                "parallax/img/06wf.jpeg",
                "parallax/img/04wf.jpeg",
                "parallax/img/11wf.jpeg",
                "parallax/img/13wf.jpeg",
                "parallax/img/14wf.jpeg",
                "parallax/img/15wf.jpeg",
            ],
            high: [
                "parallax/img/01af.jpeg",
                "parallax/img/06af.jpeg",
                "parallax/img/09af.jpeg",
                "parallax/img/01af.jpeg",
                "parallax/img/06af.jpeg",
                "parallax/img/04af.jpeg",
                "parallax/img/11af.jpeg",
                "parallax/img/13af.jpeg",
                "parallax/img/14af.jpeg",
                "parallax/img/15af.jpeg",
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
                        13000,
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
                                <span>عن</span><img style={{height: "10vh", width: "auto", verticalAlign:"middle", marginTop: "5%"}} src="parallax/img/logo.svg" alt="logo" />
                            </div>
                            <p><br/>من الرياض قلب وعاصمة المملكة العربية السعودية ، نشأنا كفريق محترف في مجال إنتاج الأحداث وتقديم الدعم اللوجيستي لها، والإنتاج الإعلامي، ومن خلال تطورنا الدائم وثقة عملائنا اللذين دعمونا منذ خطواتنا الأولى.<br/>توسعنا في جمهورية مصر العربية وقمنا بافتتاح فرع بها ونطمح في القريب أن نتوسع في ألمانيا ولبنان.. <br/> من خلال فريقنا الناجح وثقة عملائنا الذين دعمونا منذ خطوتنا الأولى. </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[1]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(1)} alt="ENTERTAINMENT SHOW" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content2">
                            العروض الترفيهية<br/><br/>
                            <span className="abut-content2span1">VENUES</span><br/><br/>  
                            <span className="abut-content2span2">الإنتاج الإعلامي</span> 
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[2]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(2)} alt="CREATE INSPIRATION" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content3"  >
                            <div>اصنع <br/>
                                <span style={{color: "#ffff00"}}>الإلهام</span> 
                            </div>
                            <p>
                                نحن نقدم أكثر من 50 عملاً للاختيار من بينها
                                <br/>ونقدم جميع أنواع الترفيه لإضفاء الإثارة والمتعة على حدثك.
                                 عندما يتعلق الأمر بالأماكن وحيث ما شئت
                                 استضف الحدث الخاص بك، سيعمل فريقنا على العثور على المكان المثالي لحدثك المثالي. <br/>
                                 كما يمكنكم جعل مناسبتك في مقرنا الرئيسي المذهل في الرياض مع ديكوراتنا الداخلية وخدمات الإضاءة الداخلية والخارجية والربط التكنولوجي والمرئي واسع النطاق</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[3]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(3)} alt="EVENT MANAGEMENT" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content4"   >
                            <div>
                                <span className="abut-content4Span2">إدارة</span><br/> 
                                <span className="abut-content4Span1">المناسبات</span> 
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[4]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(4)} alt="CREATVE & CONCEPT" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content5"  >
                            <div>
                                الإبداع<br/>
                                <span className="abut-content5Span1">الإنتاج</span><br/> 
                                <span className="abut-content5Span2">العلامات التجارية</span> 
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[5]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(5)} alt="IMAGINATION" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content6"  >
                            <div>
                                <span className="abut-content6Span1">&nbsp;&nbsp;الخيال</span><br/>
                                <span className="abut-content6Span2">&nbsp;ليس له</span> 
                                <br/> حدود 
                            </div>
                            <p>
                            يبدأ مشروعك لدينا باجتماع فريقنا الموهوب والمبدع لإيجاد أفكار رائعة وغير مسبوقة تنم عن الإبداع لإبراز حدثك في أبهى حلة، ويضع فريقنا المبدع مع فريق الإنتاج طرق تحويل هذه الأفكار الخلاقة إلى حقيقة يلمسها عملاؤك
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[6]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(6)} alt="PRODUCTION SERVICES" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content7" >
                            <div>خدمات <br/> 
                                <span className="abut-content7Span1">الإنتاج</span>
                            </div>
                            <p>
                                <br/>
                                نؤمن أن التخطيط والتنفيذ هو نصف الطريق إلى النجاح، كما نضع في ذهننا أثناء مرحلة التخطيط الالتزام بالميزانية والجدول الزمني المحدد من قبل عميلنا، حيث يقوم فريق <img style={{height: "3vh", width: "auto", verticalAlign:"middle", marginTop: "5%"}} src="parallax/img/logo.svg" alt="logo" /> في هذه المرحلة بتعيين الأشخاص المناسبين لدفع المشروع للنجاح.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[7]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(7)} alt="LET THE WORLD KNOW" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content8">
                            <div >دع العالم <br/> 
                                <span className="abut-content8Span1">يعرف</span> 
                            </div>
                            <p>
                                سواء كنت ترغب في عرض المزيد من منتجاتك، أو ترغب في بناء علامتك التجارية من الصفر، وأي شيء بينهما، كن مطمئنًا أن <img style={{height: "5vh", width: "auto", verticalAlign:"middle", marginTop: "5%"}} src="parallax/img/logo.svg" alt="logo" /> لديها فريق متخصص من المحترفين الذين سينتقلون بك إلى المستوى التالي.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[8]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(8)} alt="MOTION GRAPHICS" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content9"  >
                            <div>الرسوم <br/> 
                                <span className=" abut-content9Span1">المتحركة</span> 
                            </div>
                            <p>
                                <br/>
                                تأكد من أن فناني <img style={{height: "4vh", width: "auto", verticalAlign:"middle"}} src="parallax/img/logo.svg" alt="logo" /> الموهوبين سيحولون أي رسالة أو قصة إلى شيء ملفت للنظر
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={this.state.intervals[9]} className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src={this.setImgSrc(9)} alt="INFO GRAPHICS" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content10" >
                            <div>الرسومات <br/> 
                                <span className="abut-content10Span1">البيانية</span> 
                            </div>
                            <p>
                                <br/>
                                البيانات مهمة للغاية بالنسبة لك ولعملائك ، لذلك أردنا إضافة فريق من المتخصصين إلى <img style={{height: "4vh", width: "auto", verticalAlign:"middle", marginTop: "5%"}} src="parallax/img/logo.svg" alt="logo" /> لدينا ، لضمان تغطية جميع متطلباتك.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default About

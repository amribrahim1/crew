import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class About extends Component {
    state = {
        index: 0,
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
                pause="hover"
                controls={false}
            >
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG rev-slidebg" src="parallax/img/01wf.jpeg" alt="ABOUT" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content1">
                            <div>
                                <span>عن</span>  <span className="abut-content1Span">&nbsp;CREW&nbsp;&nbsp;</span >
                            </div>
                            <p><br/>من الرياض ، قلب وعاصمة المملكة العربية السعودية ، أنشأنا طاقم إنتاج الأحداث والإعلام والدعم اللوجستي. <br/> من خلال فريقنا الناجح وثقة عملائنا الذين دعمونا منذ خطوتنا الأولى ، لدينا ...</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/06wf.jpeg" alt="ENTERTAINMENT SHOW" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content2">
                            العروض الترفيهية<br/><br/>
                            <span className="abut-content2span1">VENUES</span><br/><br/>  
                            <span className="abut-content2span2">الإنتاج الإعلامي</span> 
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/09wf.jpeg" alt="CREATE INSPIRATION" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content3"  >
                            <div>اصنع <br/>
                                <span style={{color: "#ffff00"}}>الإلهام</span> 
                            </div>
                            <p>
                                نحن نقدم أكثر من 50 عملاً للاختيار من بينها
                                 نقديم جميع أنواع الترفيه لإضفاء الإثارة على حدثك.
                                 عندما يتعلق الأمر بالأماكن وأين شئت
                                 استضف الحدث الخاص بك ، سيتواصل معك فريقنا
                                 موفرو أماكن مختلفة للتأكد من أننا
                                 عثرنا على المكان المثالي لحدثك المثالي. <br/>
                                 أخيرًا ، اجعل مناسبتك في مقرنا الرئيسي
                                 المذهل مع ديكوراتنا الداخلية
                                 وخدمات الإسقاط الخارجية واسعة النطاق</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/01wf.jpeg" alt="EVENT MANAGEMENT" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content4"   >
                            <div>
                                <span className="abut-content4Span2">إدارة</span><br/> 
                                <span className="abut-content4Span1">المناسبات</span> 
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/06wf.jpeg" alt="CREATVE & CONCEPT" />
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
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/04wf.jpeg" alt="IMAGINATION" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content6"  >
                            <div>
                                <span className="abut-content6Span1">&nbsp;&nbsp;الخيال</span><br/>
                                <span className="abut-content6Span2">&nbsp;ليس له</span> 
                                <br/> حدود 
                            </div>
                            <p>
                                نجتمع جميعًا لإنتاج الفكرة والمفهوم المثاليين اللذين يتناسبان مع متطلبات الحدث الخاص بك.
                                من هناك ، يتواصل سحرتنا المبدعين مع فريق الإنتاج لدينا لتحويل الفكرة إلى حقيقة ، والتأكد من أننا نستخدم الحدث الخاص بك لتقديم علامتك التجارية
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/11wf.jpeg" alt="PRODUCTION SERVICES" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className="abut-content7" >
                            <div>خدمات <br/> 
                                <span className="abut-content7Span1">الإنتاج</span>
                            </div>
                            <p>
                                <br/>
                                في هذه المرحلة ، من المهم الاستمرار في التخطيط قبل التصوير اليومي. الهدف الأساسي هو الالتزام بالميزانية والجدول الزمني ، وهذا يتطلب يقظة مستمرة. <br/> <br/>

                                سيتم تعيين المزيد من CREW في هذه المرحلة ، مثل مدير الملكية ومشرف البرنامج النصي والمخرجين المساعدين ومصور الصور الثابتة ومحرر الصور ومحرري الصوت.
                                هذه فقط الأدوار الأكثر شيوعًا في صناعة الأفلام ؛ سيكون لمكتب الإنتاج الحرية في إنشاء أي مزيج فريد من الأدوار ليناسب المسؤوليات المختلفة الممكنة أثناء إنتاج الفيلم. الاتصال هو المفتاح بين الموقع والمجموعة والمكتب وشركة الإنتاج والموزعين وجميع الأطراف الأخرى المعنية.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/13wf.jpeg" alt="LET THE WORLD KNOW" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content8">
                            <div >دع العالم <br/> 
                                <span className="abut-content8Span1">يعرف</span> 
                            </div>
                            <p>
                                سواء كنت ترغب في عرض المزيد من منتجاتك ، أو ترغب في بناء علامتك التجارية من الصفر ، وأي شيء بينهما ، كن مطمئنًا أن CREW لديها فريق متخصص من المحترفين الذين سينتقلون بك إلى المستوى التالي.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/14wf.jpeg" alt="MOTION GRAPHICS" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content9"  >
                            <div>الرسوم <br/> 
                                <span className=" abut-content9Span1">المتحركة</span> 
                            </div>
                            <p>
                                <br/>
                                عندما يحين وقت تحريك الأشياء ونشر قصتك من خلال الرسوم المتحركة ، يكون لدى CREW فنان موهوب حقًا سيحول أي رسالة أو قصة إلى شيء ملفتة للنظر
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="700000" className="carousel-about-item">
                    <img className="d-block w-100 sliderIMG" src="parallax/img/15wf.jpeg" alt="INFO GRAPHICS" />
                    <Carousel.Caption className="carousel-about-caption">
                        <div className=" abut-content10" >
                            <div>الرسومات <br/> 
                                <span className="abut-content10Span1">البيانية</span> 
                            </div>
                            <p>
                                <br/>
                                البيانات مهمة للغاية بالنسبة لك ولعملائك ، لذلك أردنا إضافة فريق من المتخصصين إلى CREW لدينا ، لضمان تغطية جميع متطلباتك.
                            </p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default About
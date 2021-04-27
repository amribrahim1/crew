import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class ArHome extends Component {
	state = {
        index: 0,
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
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
                slide
            >
                <Carousel.Item interval="9000" className="carousel-home-item carousel-story">
                    <img src="parallax/img/18wf.jpeg"  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption story-caption">
                        <div className="title">
                            <div className="title-white">قصة</div>
                            <div className="title-yellow">نجاح</div>
                        </div>
                        
                        <div className="description">
                            من خلال الدعم والثقة التي وضعها عملاؤنا فينا <br/> وعلى أيدي فريقنا الموهوب والمتفاني <br/>، حققنا انتشارًا واسعًا للنجاح
                            في غضون فترة زمنية قصيرة.<br/>
                            اليوم نحن من أسرع الشركات نموا
                            في المجال<br/>وشغفنا<br/>
                            للنجاح يدفعنا إلى تحقيق<br/>
                            أكثر وأكثر كل يوم.                        
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="9000" className="carousel-home-item carousel-light">
                    <img src="parallax/img/05wf.jpeg"  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption light-caption">
                        <div className="title">
                            <div className="title-white">دع نروك</div>
                            <div className="title-yellow">يلمع</div>
                        </div>
                        
                        <div className="description">
                        لقد قمنا بتحويل العديد من الأماكن إلى أعمال فنية أصلية تم إنشاؤها خصيصًا لعملائنا. سيغطي فريقنا كل ما تحتاجه من الأثاث التنفيذي إلى طاولات المآدب الجميلة وإعدادات الأماكن لمناسبتك.
                            <br/>
                            سنقوم بإعداد الحدث الخاص بك بإضاءة مذهلة ومعدات سمعية وبصرية وعرض مسرحي. متخصص في إضاءة المسرح وأنظمة الصوت وبرامج الكمبيوتر وأحدث التقنيات ، سيكون شكل ومظهر الحدث الخاص بك مصممًا خصيصًا لك. سيقوم فريقنا بتصميم إعداد الشاشة والأبعاد المناسبة لحدثك ، مع وظائف ومقاييس تأجير شاشات LED الاحترافية
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="9000" className="carousel-home-item carousel-family">
                    <img src="parallax/img/02wf.jpeg"  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption family-caption">
                        <div className="title">
                            <div className="title-white">عائلة</div>
                            <div className="title-yellow">CREW</div>
                        </div>
                        
                        <div className="description">
                            في CREW ، نحن في الواقع عائلة أكثر من مجرد
                             زملاء. نختلف في الخبرة والجنسيات
                             اللغات والألوان والتقاليد ، ولكن في الداخل و
                             خارج المكتب ، أصبحنا جميعًا واحدًا ، وكلنا
                             نتفق على النجاح.
                            <br/>
                            الأكثر خبرة وتميزاً
                             وموهبةً في مجال تنظيم الفعاليات ، البرامج
                             إنتاج ، إعلان ، وثائقي ، الإخراج التليفزيوني وكتابة السيناريو والدعم اللوجستي ، هم
                             من ضمن عائلتنا.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="9000" className="carousel-home-item carousel-services">
                    <img src="parallax/img/12wf.jpeg"  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption services-caption">
                        <div className="title">
                            <div className="title-white">خدمات</div>
                            <div className="title-yellow">الإنتاج</div>
                        </div>
                        
                        <div className="description">
                            في صناعة الأفلام وإنتاج الفيديو ومرحلة ما قبل الإنتاج
                             يبدأ رسميًا بمجرد أن يصبح المشروع مضاءً باللون الأخضر. 
                             في هذه المرحلة ، يتم الانتهاء من الاستعدادات للإنتاج<br/><br/>
                            
                             أثناء مرحلة ما قبل الإنتاج ، يتم تقسيم النص
                                 في المشاهد الفردية مع القصص المصورة وجميع
                                 المواقع ، والدعائم ، وأعضاء فريق التمثيل ، والأزياء ، والخاصة
                                 يتم تحديد التأثيرات والتأثيرات البصرية.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="9000" className="carousel-home-item carousel-communication">
                    <img src="parallax/img/07wf.jpeg"  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption communication-caption">
                        <div className="title">
                            <div className="title-white">فن</div>
                            <div className="title-yellow">الاتصالات</div>
                        </div>
                        
                        <div className="description">
                            في صناعة الأفلام وإنتاج الفيديو ومرحلة ما قبل الإنتاج
                             يبدأ رسميًا بمجرد أن يصبح المشروع مضاءً باللون الأخضر. 
                             في هذه المرحلة ، يتم الانتهاء من الاستعدادات للإنتاج<br/><br/>
                            
                             أثناء مرحلة ما قبل الإنتاج ، يتم تقسيم النص
                                 في المشاهد الفردية مع القصص المصورة وجميع
                                 المواقع ، والدعائم ، وأعضاء فريق التمثيل ، والأزياء ، والخاصة
                                 يتم تحديد التأثيرات والتأثيرات البصرية.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="9000" className="carousel-home-item carousel-logo">
                    <img src="parallax/img/03wf.jpeg"  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption logo-caption">
                        <div className="title">
                            <div className="title-white">شعار</div>
                            <div className="title-yellow">فريق العمل</div>
                        </div>
                        
                        <div className="description">
                            في وقت كانت التكنولوجيا تحتل المرتبة الأولى
                             الموقف ، بينما يتقلص العنصر البشري و
                             يتراجع ، اخترنا أن نرفع شعارًا
                             يميزنا عن غيرنا. اسمنا هو
                             شعار ، CREW يصف أن فريقنا هو الأول
                             الشيء الذي يميزنا ، نستخدم كلمة من a
                             أحرف قليلة ، ولكن لها معنى أعمق بكثير و
                             قيمة مثل <span style={{fontWeight: 700, color: "rgb(255, 255, 0)", transition: "none 0s ease 0s", textAlign: "inherit", lineHeight: "26px", borderWidth: "0px", margin: "0px", padding: "0px", letterSpacing: "0px", fontSize: "24px"}}>we - together - all of us .</span><br/><br/>
                            
                             في CREW ، نبذل قصارى جهدنا لنكون في طليعة
                            الشركات التي تعمل في مجالات التنظيم
                            الأحداث والإنتاج الإعلامي والدعم اللوجستي.
                            
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval="900000" className="carousel-home-item carousel-future">
                    <img src="parallax/img/08wf.jpeg"  alt="" data-bgposition="center center" data-kenburns="on" data-duration="100" data-ease="Power4.easeOut" data-scalestart="150" data-scaleend="100" data-rotatestart="0" data-rotateend="0" data-blurstart="30" data-blurend="0" data-offsetstart="0 0" data-offsetend="0 0" data-bgparallax="off" className="rev-slidebg" data-no-retina />
                    <Carousel.Caption className="carousel-home-caption future-caption">
                        <div className="title">
                            <div className="title-white">اصنع</div>
                            <div className="title-yellow">مستقبلك</div>
                        </div>
                        
                        <div className="description">
                            بالنظر إلى المستقبل ، فإننا نبذل جهودنا لإنشاء 
                             عرض لمنتجك عالي الجودة من الطراز العالمي يساعدك على
                             تحقيق النمو<br/>
                             نحن نقدم أيضًا خدمات المرشدين من النساء أو الرجال ، بالإضافة إلى تخطيط وإدارة احتياجاتك بأدق التفاصيل. يشمل عرضنا كل شيء بدءًا من الخدمات اللوجستية والتوظيف وإدارة الاحتياجات.
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>                
        )
    }
}

export default ArHome
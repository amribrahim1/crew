import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import '../../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

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
                                autoplayTimeout={9000}
                            >
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">العلامات التجارية والسمات</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">سوف نستفيد من هذا الحدث الخاص بك لإظهار علامتك التجارية في شكل مبدع</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الإبداع</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft"> يمكننا تصميم حدثك بشكل مبدع يدور حول أفكار وخيال العملاء المستهدفين لك</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الطباعة</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يمكننا التعامل مع جميع المتطلبات الطباعية للحدث الخاص بك بجودة عالية وأقل تكلفة</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">هدايا العلامات التجارية</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">نحن متخصصون في هدايا الشركات التي تبرز علامتكم التجارية من بين منافسيكم ، مراعين أعلى وأجود مواد التعبئة والتغليف والتي تجعل من هداياكم ذكرى لا تُنسى</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الديكور</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">لقد قمنا بتحويل العديد من الأماكن إلى أعمال فنية أصيلة تم إنشاؤها خصيصًا لمناسبتك. كل ما تحتاجه من الأثاث التنفيذي للمناسبات إلى طاولات المآدب الجميلة وإعدادات المكان لمناسبتك </p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الإضاءة</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يمكن تحسين موقع الحدث الخاص بك من خلال الإضاءة الرائعة والمعدات السمعية والبصرية وتجهيز المسرح.<br/>فريقنا يضم نخبة من المتخصصين في إضاءة المسرح وأنظمة الصوت، وهم على أتم الاستعداد لتلبية متطلبات حدثك الصوتية والمرئية مهما كان حدثك صغيرًا أو كبيرًا. </p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الشاشات</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">سيقوم فريقنا المحترف بتصميم وإعداد الشاشات المناسبة وبأبعادها المناسبة للحدث الخاص بك، وتوظيف الشاشات في خدمة حدثك بحرفية وتقنية عالية جدا.</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">نظام إدارة الحدث</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يقوم فريقنا بتخطيط وتنفيذ عملية إدارة الحدث الخاص بك بحرفية عالية، ومستخدما أحدث التقنيات في مجال IT، مما يجعل عملية التسجيل وحضور الحدث الخاص بك عملية سهلة ومرنة لزوارك</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">التغطية الإعلامية</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يقوم فريقنا المتخصص في خددمات التصوير الفوتوغرافي والفيديو والتحرير بتغطية الحدث الخاص بك وأنشطة ضيوفك خلال الحدث بتركيز عالي على أدق التفاصيل، مما يجعل عرض الحدث الخاص بك على وسائل التواصل الاجتماعي وقنوات البث التليفزيوني يتم بسهولة وسلاسة، كما يمكن لمحررينا المحترفين التركيز على أهم النقاط البارزة في حدثك</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">البث المباشر</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يعمل فريقنا المتخصص على تطوير وابتكار وتنفيذ حلول لنقل الأحداث مباشرة، مما يعزز تجربة الجمهور في متابعة حدثك بسلاسة ومتعة </p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الترجمة</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">نقدم لعملائنا خدمات الترجمة الفورية للأحداث بأغلب اللغات العالمية</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">تقديم الدعم</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">عندما يتعلق الأمر بإنشاء حدث معين  دائما ما يجدنا عملاؤنا معهم جنبا إلى جنب في إعداد الحدث واختيار المكان وتجهيز التصميمات الخاصة بالمكان، ومساعدتهم في اختيار الأجهزة الصوتية والمرئية والتقنيات الحديثة التي تزيد من نجاح حدثهم</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">العروض الترفيهية</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft"> نقدم أكثر من 50 عملاً في مجال العروض الترفيهية للاختيار من بينها ، كما نوفر جميع أنواع العروض الترفيهية لإضفاء الإثارة والمتعة على فعاليتك</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الأماكن</h1>
                                    <div  className="testimonial-line"></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">مساعدة عملائنا في اختيار الأماكن المناسبة لحدثهم تقع في صميم عملنا في سعينا لإبراز حدثك في أبهى صورة </p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الإنتاج الإعلامي</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يستطيع موظفونا المحترفون أن يجعلوا الحدث الخاص بك مذهلا في مكان عرضه الرئيسي من خلال خدمات الإنتاج الإعلامي واسعة النطاق التي يقدمونها</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">عروض الهولوجرام</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">استشفافا منا للمستقبل فإننا نبذل قصارى جهودنا لتطوير أنفسنا؛ لكي نتمكن من تقديم منتجات عرض عالية المستوى وعالمية بأحدث التكنولوجيا المتاحة، مما يساعد عملك على البروز وتحقيق النمو في السوق</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الاستشاريون</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">طاقمنا الاستشاري (النسائي أو الرجال) مؤهلٌ على أعلى مستوى لكي نقدم الدعم اللازم لك لإنجاح مشاريعك </p>
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
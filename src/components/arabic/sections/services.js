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
                            >
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">العلامات التجارية والسمات</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">سوف نستفيد من هذا الحدث الخاص بك لإظهار علامتك التجارية في شكل مبدع</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الإبداع</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft"> يمكننا تصميم حدث بشكل مبدع يدور حول خيال المجموعة المستهدفة</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الطباعة</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يمكننا التعامل مع جميع جوانب الحدث الخاص بك بجودة عالية وطباعة ميسورة التكلفة</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">هدايا العلامات التجارية</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">نحن متخصصون في هدايا الشركات التي تبرز من بين الحشود ، مع المنتجات والتعبئة والتغليف التي تمثلك والتي سوف تتذكرها</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الديكور</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">لقد قمنا بتحويل العديد من الأماكن إلى أعمال فنية أصلية تم إنشاؤها خصيصًا لمناسبتك. كل ما تحتاجه من الأثاث التنفيذي للمناسبات إلى طاولات المآدب الجميلة وإعدادات المكان لمناسبتك </p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الإضاءة</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يمكن تحسين موقع الحدث الخاص بك من خلال الإضاءة الرائعة والمعدات السمعية والبصرية والمسرح. متخصصون فى إضاءة المسرح وأنظمة الصوت والكمبيوتر المحمول وتأجير التكنولوجيا. سيقومون بتخصيص المتطلبات الصوتية المرئية للحدث الخاص بك لكل حدث مهما كان الحدث كبيرًا أو صغيرًا</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الشاشات</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">ستعمل مواهبنا على تصميم وإعداد الشاشة المناسبة وأبعاد الحدث الخاص بك ، وتوظيف شاشات الـLED بحرفية</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">نظام التسجيل</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يتم تحقيق عملية التسجيل في خطوات. تسمح وحدة التسجيل بالتكوين السهل والمرن للعملية بأكملها</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">التغطية الإعلامية</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">التقط الحدث الخاص بك لك ولضيوفك من خلال خدمات التصوير الفوتوغرافي والفيديو والتحرير المفضلة المضمونة للتركيز على كل التفاصيل. تأكد من عرض الحدث الخاص بك على وسائل التواصل الاجتماعي لمشاركة النقاط البارزة</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">البث المباشر</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">نحن نعمل على تطوير وتنفيذ حلول الأحداث المباشرة التي تعزز تجربة جمهور الحدث الخاص بك </p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الترجمة</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">نقدم لك ترجمة على الإنترنت</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">تقديم الدعم</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">نحن نقدم خدمة كاملة لحزمة دعم الشركات والتي تشمل إعداد الحدث واختيار المكان بالإضافة إلى تصميم المكان</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">العروض الترفيهية</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft"> نقدم أكثر من 50 عملاً للاختيار من بينها ، نوفر جميع أنواع الترفيه لإضفاء الإثارة على حفلتك وإضفاء الإثارة على فعاليتك</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الأماكن</h1>
                                    <div  className="testimonial-line"></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">يمكننا تصميم حدث إبداعي يسعى للتركيز على خيال المجموعة المستهدفة </p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">الإنتاج الإعلامي</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">اجعل الحدث الخاص بك في مكانه الرئيسي مذهلاً من خلال خدماتنا الداخلية أو الخارجية واسعة النطاق و 30 خدمة عرض</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">عروض الهولوجرام</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">بالنظر إلى المستقبل ، فإننا نبذل جهودنا لإنشاء منتج عرض عالي المستوى على مستوى عالمي يساعد عملك على تحقيق نمو في السوق</p>
                                </div>
                                <div className="services-item item text-center text-md-right">
                                    <h1 className="mb-4 text-white per-slide wow fadeInLeft shining-text H1Services">المرشدون</h1>
                                    <div className="line-cont"><div className="testimonial-line"></div></div>
                                    <p className="mb-5 per-slide text-white wow fadeInLeft">المرشدين النساء والرجال هنا من أجلك </p>
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
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <img className="d-block w-100 sliderIMG" src={window.innerWidth>window.innerHeight ? "parallax/img/17wf.jpeg" : "parallax/img/17af.jpeg"} alt="Second slide" style={{height: "100vh"}} />
                <div className={window.innerWidth>window.innerHeight ? "contactDIV" : "contactDIV contactDIVMo"}>
                    <div>يمكنك  <br/> 
                        <span className="contactSpan">التواصل معنا</span> 
                    </div>
                    <p>
                        <br/>
                        نحن نتطلع إلى الاستماع لك. كما أنه لشرف عظيم أن تزورنا في مكتبنا الكائن في حي العليا بالرياض.<br/>
                        كما يمكنك زيارة صفحاتنا على مواقع التواصل الاجتماعي.
                    </p>
                    <div>
                        <a href="https://goo.gl/maps/8jUkRoTyG8MHt4N19" target="_blank" rel="noreferrer" className={window.innerWidth>window.innerHeight ? "d-none" : "btn btn-rounded btn-dark"} style={{backgroundColor: "#000000", color: "#ffffff"}}><b className="font-weight-normal">موقعنا <i className="fas fa-map-marker-alt"></i></b></a>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d906.4709953067091!2d46.7038518!3d24.6621215!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1619864656763!5m2!1sar!2seg" className={window.innerWidth>window.innerHeight ? "" : "d-none"} width="100%" height="410" title="address" style={{border:0, filter: "invert(90%)"}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
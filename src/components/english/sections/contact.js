import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <img className="d-block w-100 sliderIMG" src={window.innerWidth>window.innerHeight ? "parallax/img/17wf.jpeg" : "parallax/img/17af.jpeg"} alt="Second slide" style={{height: "100vh"}} />
                <div className={window.innerWidth>window.innerHeight ? "contactDIV" : "contactDIV contactDIVMo"}>
                    <div>YOU CAN  <br/> 
                        <span className="contactSpan">REACH US</span> 
                    </div>
                    <p>
                        We are looking forward towards hearing from
                        you. It will also be a great honor to have you visit
                        us at our office, which is located in Al-Olaya
                        distracted, Riyadh.<br/>
                        You can also find us on Social Media channels.
                    </p>
                    <div>
                    <a href="https://goo.gl/maps/8jUkRoTyG8MHt4N19" target="_blank" rel="noreferrer" className={window.innerWidth>window.innerHeight ? "d-none" : "btn btn-rounded btn-dark"} style={{backgroundColor: "#000000", color: "#ffffff"}}><b className="font-weight-normal">Go to Location <i className="fas fa-map-marker-alt"></i></b></a>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d906.4709953067091!2d46.7038518!3d24.6621215!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1619864656763!5m2!1sar!2seg" className={window.innerWidth>window.innerHeight ? "" : "d-none"} width="550" height="410" title="address" style={{border:0, filter: "invert(90%)"}} allowFullScreen loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <img className="d-block w-100 sliderIMG" src="parallax/img/17wf.jpeg" alt="Second slide" style={{height: "100vh"}} />
                <div className="contactDIV">
                    <div>يمكنك  <br/> 
                        <span className="contactSpan">التواصل معنا</span> 
                    </div>
                    <p>
                        <br/><br/>
                        نحن نتطلع إلى الاستماع منك. كما أنه لشرف عظيم أن تزورنا في مكتبنا الكائن في حي العليا بالرياض.<br/>
                        يمكنك زيارة موقعنا <a href="http://www.crewsa.net" style={{fontWeight: 800}}>www.crewsa.net</a>&nbsp;<br/>
                        بالإضافة إلى صفحات مواقع التواصل الاجتماعي.
                    </p>
                    <div>
                        <a href="https://goo.gl/maps/8jUkRoTyG8MHt4N19" target="_blank" rel="noreferrer" className="btn btn-rounded btn-dark" style={{backgroundColor: "#000000", color: "#ffffff"}}><b className="font-weight-normal">موقعنا <i className="fas fa-map-marker-alt"></i></b></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
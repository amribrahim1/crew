import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <img className="d-block w-100 sliderIMG" src="parallax/img/17wf.jpeg" alt="Second slide" style={{height: "100vh"}} />
                <div className="contactDIV">
                    <div>YOU CAN  <br/> 
                        <span className="contactSpan">REACH US</span> 
                    </div>
                    <p>
                        <br/><br/>
                        We are looking forward towards hearing from
                        you. It will also be a great honor to have you visit
                        us at our office, which is located in Al-Olaya
                        distracted, Riyadh.<br/>
                        You can also find us on <a href="http://www.crewsa.net" style={{fontWeight: 800, color: "#000000"}}>www.crewsa.net</a>&nbsp;
                        As well as the following Social Media channels.
                    </p>
                    <div>
                        <a href="https://goo.gl/maps/8jUkRoTyG8MHt4N19" target="_blank" rel="noreferrer" className="btn btn-rounded btn-dark" style={{backgroundColor: "#000000", color: "#ffffff"}}><b className="font-weight-normal">Go to Location <i className="fas fa-map-marker-alt"></i></b></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
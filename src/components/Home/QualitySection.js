import React, { Component } from 'react';

class Quality extends Component {

    render() {

        return (
            <section className="quality-area pt-120 pb-90 fix">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <div className="kquality mb-30" data-aos="zoom-in-right">
                            <div className="kquality-icon">
                                <img src="assets/img/icon/service-icon-1a.png" className="img-fluid" alt="about-icon"/>
                            </div>
                            <div className="kquality-text fix">
                                <h3 className="mb-20 kquality-text-title">We Deliver the Best Quality</h3>
                                <p>GREAT THINGS IN BUSINESS ARE NEVER DONE BY ONE PERSON. THEY’RE DONE BY A TEAM OF PEOPLE.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="text-lg-end mb-30" data-aos="zoom-in-left">
                            <div className="kquality-img">
                                <img src="assets/img/img15.jpg" className="img-fluid" alt="cta-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Quality;
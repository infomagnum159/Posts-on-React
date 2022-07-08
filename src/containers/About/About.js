import React from 'react';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import img1 from '../../component/assets/images/img1.jpg';
import img2 from '../../component/assets/images/img2.jpg';
import './About.css';


const About = () => {
    return (
        <>
            <Header/>
            <div className="about">
                <h3 className="about-title">About</h3>
                <div className="author">
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci beatae culpa,
                        deleniti eaque et id ipsum iure nesciunt odit recusandae tempore tenetur,
                        voluptate! Dolorum ducimus eum minus nisi placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                        fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                        Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                        fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                        Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                        fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                    </p>
                </div>
            </div>
            <div className="about">
                <h3 className="about-title">Gallery</h3>
                <div className="gallery">
                    <div className="system">
                        <div className="system-img"><img src={img1} alt='system'/></div>
                        <p>
                            Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                            fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                            Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                            fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                        </p>
                    </div>
                    <div className="system">
                        <div className="system-img"><img src={img2} alt='system'/></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci beatae culpa,
                            deleniti eaque et id ipsum iure nesciunt odit recusandae tempore tenetur,
                            voluptate! Dolorum ducimus eum minus nisi placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Eaque labore laudantium voluptates.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about">
                <h3 className="about-title">Author</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci beatae culpa,
                        deleniti eaque et id ipsum iure nesciunt odit recusandae tempore tenetur,
                        voluptate! Dolorum ducimus eum minus nisi placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                        fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                        Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                        fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                        Eaque labore laudantium voluptates. Accusantium culpa cum et fuga
                        fugiat ipsa itaque, libero magnam, molestias natus optio perspiciatis quae quaerat repellendus, totam.
                    </p>
            </div>
            <Footer/>
        </>
    );
};

export default About;
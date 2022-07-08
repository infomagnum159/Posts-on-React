import React from 'react';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import img3 from '../../component/assets/images/img3.jpg';
import img4 from '../../component/assets/images/img4.jpg';
import img5 from '../../component/assets/images/img5.jpg';
import './Contacts.css';

const Contacts = () => {

    return (
        <>
            <Header/>
            <div className="contacts">
                <h3 className="about-title">Our contacts</h3>
                <p className="contacts-text">
                    We are always happy to help you and answer all your questions.
                    We are attentive to every request and are available for you around the clock.
                </p>
                <div className='cards'>
                <div className="card">
                    <img src={img3} alt='icon'/>
                    <h3>Social networks</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum vitae elit eu nibh ultricies vehicula sed quis neque.
                    </p>
                </div>
                    <div className="card">
                        <img src={img4} alt='icon'/>
                        <h3>Online consultant</h3>
                        <p>
                            Praesent interdum semper est, vel tincidunt magna gravida a.
                            In egestas ligula pellentesque purus malesuada euismod.
                            Nam gravida.
                        </p>

                    </div>
                    <div className="card">
                        <img src={img5} alt='icon'/>
                        <h3>Our email</h3>
                        <p>
                            Nunc vel ante in.
                            ligula sodales vestibulum. Nullam porttitor sem nec ligula
                            ultrices pulvinar. Maecenas ut pretium ante.
                        </p>
                    </div>
                </div>
                <h3 className="about-title title-3">Contact us for any questions</h3>

            </div>
            <Footer/>
        </>
    );
};

export default Contacts;
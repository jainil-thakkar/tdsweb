// src/components/Home.js
import React from 'react';
import profiledp from '../assets/tdshost.jpg';
import image1 from '../assets/guestgallery/bashir.jpg';
import image2 from '../assets/guestgallery/derek.jpg';
import image3 from '../assets/guestgallery/davidpeters.png';
import image4 from '../assets/guestgallery/intuitionpay.jpg';
import image5 from '../assets/guestgallery/photo12.jpg';
import image6 from '../assets/guestgallery/PicGT_1.jpg';
import image7 from '../assets/guestgallery/Meal_With_DrCuneyt.jpg';
import image8 from '../assets/guestgallery/video_capture.JPEG';
import image9 from '../assets/guestgallery/thumbnail.jpg';



const Home = () => {
    return (
        <div class="homepage">
            <div className="hero-section">
                <img src={profiledp} alt="Your Photo" class="profile-photo"/>
                <div className="quote">"Fuel the Ambition with Wisdom"</div>
            </div>
            <div className="gallery-container">
                <button className="scroll-button left" onClick={() => scrollGallery('left')} >&lt;</button>
                <div className="gallery" id="gallery">
                    <img src={image1} alt="pic1"/>
                    <img src={image2} alt="pic2"/>
                    <img src={image3} alt="pic3"/>
                    <img src={image4} alt="pic4"/>
                    <img src={image5} alt="pic5"/>
                    <img src={image6} alt="pic6"/>
                    <img src={image7} alt="pic7"/>
                    <img src={image8} alt="pic8"/>
                    <img src={image9} alt="pic9"/>
                    
                </div>

                <button class="scroll-button right" onClick={() => scrollGallery('right')}>&gt;</button>

            </div>
        </div>


    );
};

const scrollGallery = (direction) => {
    const gallery = document.getElementById('gallery');
    const scrollAmount = direction === 'left' ? -200 : 200;
    gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

export default Home;

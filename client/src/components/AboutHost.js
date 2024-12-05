import React from 'react';
import hostImage from '../assets/host.jpg'; // Update path

const AboutHost = () => {
    return (
        <section id="about-host" className="zigzag-section left-image">
            <img src={hostImage} alt="About the Host" />
            <div className="content">
                <h1>About the Host</h1>
                <blockquote>“This section is dedicated to introducing Jainil Thakkar, the voice behind the show... <br/>
                Jainil has earned a 4-year BSc with focus in Computer Science & Mathematics from UofManitoba, CAN. <br/>
                His aim to establish a podcast show is from the vision he saw to open the eyes which seem to be closing by the fear of new AI technologies. ”</blockquote>
            </div>
        </section>
    );
};

export default AboutHost;

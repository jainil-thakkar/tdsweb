import React from 'react';
import podcastImage from '../assets/podcast.jpg'; 

const AboutShow = () => {
    return (
        <section id="about-show" className="zigzag-section right-image">
            <div className="content">
                <h1>About the Podcast</h1>
                <blockquote>“Welcome to the Tech Detonator Show, hosted by Jainil Thakkar. Dive into a world where technology meets daily life...
                    <br/>This show was build to create awareness, to show people that ChatGPT does not mean the end. 
                    <br/>Everybody has the skills to thrive. Just need to believe yourself. ”</blockquote>
            </div>
            <img src={podcastImage} alt="About the Podcast" />
        </section>
        
    );
};

export default AboutShow;

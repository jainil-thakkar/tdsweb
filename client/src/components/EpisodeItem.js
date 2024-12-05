import React from 'react';
import '../styles/EpisodeItem.css';

const EpisodeItem = ({ episode }) => {
    const handleLike = async () => {
        const response = await fetch(`/api/episodes/${episode._id}/like`, { method: 'POST' });
        if (response.ok) {
            console.log('Like added!');
            
        }
    };

    const handleDislike = async () => {
        const response = await fetch(`/api/episodes/${episode._id}/dislike`, { method: 'POST' });
        if (response.ok) {
            console.log('Dislike added!');
            // Optionally refresh data or decrement locally
        }
    };

    const handleReview = async (reviewText) => {
        const response = await fetch(`/api/episodes/${episode._id}/review`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ review: reviewText })
        });
        if (response.ok) {
            console.log('Review added!');
            // Optionally update the reviews displayed
        }
    };

    return (
        <div className="episode-item">
            <div className = "video-container">
                <iframe
                    src={`https://www.youtube.com/embed/${episode.videoID}`}
                    title={episode.title}
                    allowFullScreen
                    style={{ width: '80%', height: '250px' }}
                />
            </div>
            <div className="episode-content">
                <h3>{episode.title}</h3>
                <p>{episode.description}</p>
                <div className="episode-actions">
                    <button onClick={handleLike}>Like</button>
                    <button onClick={handleDislike}>Dislike</button>
                    <button onClick={() => handleReview("Great episode!")}>Write Review</button>
                    <a href={episode.audioUrl} download>Download Audio</a>
                </div>
            </div>
        </div>
    );
};

export default EpisodeItem;

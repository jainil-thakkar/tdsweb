import React from 'react';
import EpisodeItem from './EpisodeItem.js';

const EpisodeList = ({ episodes, handleLike, handleDislike, handleReview }) => {
    return (
        <div className="episode-list">
            {episodes.map(episode => (
                <EpisodeItem
                    key={episode._id}
                    episode={episode}
                    handleLike={handleLike}
                    handleDislike={handleDislike}
                    handleReview={handleReview}
                />
            ))}
        </div>
    );
};

export default EpisodeList;

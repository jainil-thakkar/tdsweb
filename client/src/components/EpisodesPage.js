import React, { useState, useEffect } from 'react';
import EpisodeList from './EpisodeList';
import SearchBar from './SearchBar.js';
import '../styles/EpisodePage.css'; // Ensure this CSS file contains all the necessary styles

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [filteredEpisodes, setFilteredEpisodes] = useState([]);
    const [categories] = useState(['All', 'Technology', 'AI', 'Humanify', 'Founders']);
    const [activeCategory, setActiveCategory] = useState('All'); // Utilized to filter episodes

    useEffect(() => {
        async function fetchEpisodes() {
            try {
                const response = await fetch('https://tdsweb-be.onrender.com/api/episodes');
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();
                console.log('Fetched episodes:', data);  // This logs data to the console
                setEpisodes(data);
                setFilteredEpisodes(data);
            } catch (error) {
                console.error('Error fetching episodes:', error);
            }
        }
        fetchEpisodes();
    }, []);

    const handleCategorySelect = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredEpisodes(episodes);
        } else {
            setFilteredEpisodes(episodes.filter(ep => ep.categories.includes(category)));
        }
    };

    const handleSearch = (event) => {
        const searchQuery = event.target.value.toLowerCase();
        if (!searchQuery) {
            setFilteredEpisodes(activeCategory === 'All' ? episodes : episodes.filter(ep => ep.categories.includes(activeCategory)));
        } else {
            const filtered = episodes.filter(ep =>
                ep.title.toLowerCase().includes(searchQuery) ||
                ep.description.toLowerCase().includes(searchQuery)
            );
            setFilteredEpisodes(filtered);
        }
    };

    return (
        <div>
            <SearchBar setFilteredEpisodes={setFilteredEpisodes} allEpisodes={episodes} handleSearch={handleSearch} />
            <div className="categories">
                {categories.map(category => (
                    <button key={category} onClick={() => handleCategorySelect(category)} className="category-button">
                        {category}
                    </button>
                ))}
            </div>
            <EpisodeList episodes={filteredEpisodes} />
        </div>
    );
};

export default EpisodesPage;
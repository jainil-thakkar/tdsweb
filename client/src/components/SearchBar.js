import React, { useState } from 'react';
import '../styles/SearchBar.css'; // Ensure the CSS path is correct

const SearchBar = ({ setFilteredEpisodes, allEpisodes }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = event => {
        const term = event.target.value;
        setSearchTerm(term);
        if (term.trim()) {
            const filtered = allEpisodes.filter(ep => ep.title.toLowerCase().includes(term.toLowerCase()));
            setFilteredEpisodes(filtered);
        } else {
            setFilteredEpisodes(allEpisodes);
        }
    };

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search episodes..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;

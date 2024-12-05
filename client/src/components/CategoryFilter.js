import React, { useState } from 'react';

const CategoryFilter = ({ onCategorySelect, categories }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button className="toggle-button" onClick={() => setIsVisible(!isVisible)}>
        Toggle Categories
      </button>
      <div className={`category-filter ${isVisible ? 'show' : ''}`}>
        {categories?.map(category => (
          <button key={category} onClick={() => onCategorySelect(category)}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;

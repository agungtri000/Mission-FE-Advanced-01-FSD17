const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <nav className="category-tabs" aria-label="Categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default CategoryTabs;

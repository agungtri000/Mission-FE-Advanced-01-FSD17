const CourseCard = ({ image, title, description, instructor, rating, price }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating.value);
    const hasHalfStar = rating.value % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star">★</span>);
      }
    }
    return stars;
  };

  return (
    <article className="course-card">
      <div className="card-content">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <div className="isi-card">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <div className="card-instructor">
            <img src={instructor.avatar} alt={instructor.name} className="instructor-avatar" />
            <div className="instructor-info">
              <p className="instructor-name">{instructor.name}</p>
              <p className="instructor-role">{instructor.role}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="rating">
            <div className="stars">{renderStars()}</div>
            <span className="rating-text">{rating.value} ({rating.count})</span>
          </div>
          <span className="price">{price}</span>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;

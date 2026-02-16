const CourseCard = ({ image, title, description, instructor, rating, price, onEdit, onDelete }) => {
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
          {(onEdit || onDelete) && (
            <div className="card-actions">
              {onEdit && (
                <button className="btn-action btn-edit" onClick={onEdit} title="Edit">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
              {onDelete && (
                <button className="btn-action btn-delete-card" onClick={onDelete} title="Hapus">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              )}
            </div>
          )}
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

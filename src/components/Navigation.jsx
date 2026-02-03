const Navigation = ({ showAvatar = false }) => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="logo">
            <img src="/Image/Logo-video-belajar.png" alt="videobelajar" />
          </div>
          <div className="nav-menu desktop-only">
            <a href="#" className="nav-link">Kategori</a>
          </div>
          <button className="mobile-menu-toggle mobile-only" aria-label="Menu">
            <img src="/Image/Material Icon (menur).png" alt="" />
          </button>
        </div>
        {showAvatar && (
          <div className="nav-avatar desktop-only">
            <img src="/Image/avatar-profile.png" alt="User Avatar" className="avatar" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

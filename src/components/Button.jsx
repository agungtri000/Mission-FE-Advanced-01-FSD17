const Button = ({ children, variant = 'primary', type = 'button', onClick, icon }) => {
  const getButtonClass = () => {
    const baseClass = 'btn';
    const variantClasses = {
      login: 'btn-login',
      register: 'btn-register',
      google: 'btn-google'
    };
    return `${baseClass} ${variantClasses[variant] || ''}`;
  };

  return (
    <button type={type} className={getButtonClass()} onClick={onClick}>
      {icon && <img src={icon} alt="" />}
      {typeof children === 'string' ? <span>{children}</span> : children}
    </button>
  );
};

export default Button;

import { useState } from 'react';

const FormInput = ({ label, type = 'text', placeholder = '', required = false, hasToggle = false, name, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const inputType = hasToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="form-input-wrapper">
        <input
          type={inputType}
          className="form-input"
          placeholder={placeholder}
          required={required}
          name={name}
          value={value}
          onChange={onChange}
        />
        {hasToggle && (
          <button
            type="button"
            className="toggle-password"
            onClick={handleToggle}
            aria-label="Toggle password visibility"
          >
            <img src="/Image/icon-eye-off.png" alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;

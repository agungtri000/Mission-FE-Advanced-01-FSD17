const PhoneInput = ({ label, required = false, name, value, onChange, countryCode = '+62', flagIcon = '/Image/icon-indo-flag.png' }) => {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      <div className="form-phone-wrapper">
        <div className="form-kiri">
          <div className="form-phone-country">
            <div className="country-flag">
              <img src={flagIcon} alt="" />
            </div>
          </div>
          <div className="form-phone-code">
            <input type="text" className="form-input" value={countryCode} readOnly />
            <img src="/Image/icon-arrow-down.svg" alt="" />
          </div>
        </div>
        <div className="form-phone-number">
          <input
            type="tel"
            className="form-input"
            placeholder=""
            required={required}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;

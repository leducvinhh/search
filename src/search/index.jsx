import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import './index.css';

Header.propTypes = {
  onSubmit: PropTypes.func,
};

Header.defaultProps = {
  onSubmit: null,
};

function Header(props) {
  const { onSubmit } = props;
  const [searchTeem, setSearchTerm] = useState('');
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;

    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValue = {
        value,
      };

      onSubmit(formValue);
    }, 300);
  }

  function handleOptionsChange(e) {
    const value = e.target.value;
    const formValue = {
      value,
    };

    if (!onSubmit) return;

    onSubmit(formValue);
  }

  return (
    <div className="main-search">
      <form className="form-field">
        <input
          className="form-input"
          value={searchTeem}
          onChange={handleSearchTermChange}
          type="text"
          placeholder=" "
        />
        <label htmlFor="name" className="form-label">
          Search
        </label>
      </form>
      <div className="select-field">
        <select onChange={handleOptionsChange}>
          <option value="">Chọn Địa Chỉ</option>
          <option value="Bình Dương">Bình Dương</option>
          <option value="TP HCM">TP HCM</option>
        </select>
        <select onChange={handleOptionsChange}>
          <option value="">Chọn Lớp Học</option>
          <option value="D17C01A">D17C01A</option>
          <option value="D17C02A">D17C02A</option>
        </select>
        <select onChange={handleOptionsChange}>
          <option value="">Chọn Giới Tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
      </div>
    </div>
  );
}

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import loginPhotoSrc from '../../assets/undraw-upload-re-pasx.png';
import './Form.css';

function Form({ typeOfForm }) {
  return (
    <div className='form'>
      <div className='form-image'>
        <div>
          <p>Design APIs fast,</p>
          <p>Manage content easily.</p>
        </div>
        <img src={loginPhotoSrc} alt="login photo" />
      </div>
      <div className='form-field'>
        <h2>{typeOfForm} to your CMS+ account</h2>
        <div className='form-field-input'>
          <div>
            <p>Email</p>
            <input type='email' />
          </div>
          <div>
            <p>Password</p>
            <input type='password' />
          </div>
          <button>{typeOfForm}</button>
        </div>
      </div>
    </div>
  );
}

Form.propTypes = {
  typeOfForm: PropTypes.string.isRequired
};

export default Form;

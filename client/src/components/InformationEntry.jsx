import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

function InformationEntry({
  optionSMS, optionTwitter, optionEmail, barkPackage, optionCall,
}) {
  const clearClicker = () => {
    barkPackage.setValues({
      message: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      twitterHandle: '',
      email: '',
    });
  };
  return (
    <div className="form-container">
      <img src="https://i5.walmartimages.com/asr/4a4638f6-60b5-4d23-a461-1013faee4d83.f410b856a3e39c7b4513c802c3dd175e.jpeg" alt="logo" />
      <form className="input-form">
        <div className="receiver-name-container">
          <div className="first-name-container">
            <div id="first-name" className="input-name">First Name</div>
            <input className="input-box" type="text" id="firstName" value={barkPackage.values.firstName} onChange={barkPackage.handleChange} />
          </div>
          <div className="last-name-container">
            <div id="last-name" className="input-name">Last Name</div>
            <input className="input-box" type="text" id="lastName" value={barkPackage.values.lastName} onChange={barkPackage.handleChange} />
          </div>
        </div>
        <div className="input-container">
          <div className="input-name">Message to Send</div>
          <input className="input-box" type="text" id="message" value={barkPackage.values.message} onChange={barkPackage.handleChange} />
        </div>
        <div className="input-container">
          <div className="input-name">Phone Number</div>
          <input className="input-box" type="text" id="phoneNumber" value={barkPackage.values.phoneNumber} onChange={barkPackage.handleChange} disabled={!(optionSMS || optionCall)} />
        </div>
        <div className="input-container">
          <div className="input-name">Twitter Handle</div>
          <input className="input-box" type="text" id="twitterHandle" value={barkPackage.values.twitterHandle} onChange={barkPackage.handleChange} disabled={!optionTwitter} />
        </div>
        <div className="input-container">
          <div className="input-name">Email</div>
          <input className="input-box" type="text" id="email" value={barkPackage.values.email} onChange={barkPackage.handleChange} disabled={!optionEmail} />
        </div>
      </form>
      <div className="create-buttons">
        <button id="clear-inputs" className="button" type="button" onClick={clearClicker}>Clear</button>
        <button id="form-next" className="button" type="submit" onClick={barkPackage.handleSubmit}>Next Page</button>
      </div>
      {barkPackage.errors.firstName && <div className="error">{barkPackage.errors.firstName}</div>}
      {barkPackage.errors.lastName && <div className="error">{barkPackage.errors.lastName}</div>}
      {barkPackage.errors.communication && <div className="error">{barkPackage.errors.communication}</div>}
      {barkPackage.errors.phoneNumber && <div className="error">{barkPackage.errors.phoneNumber}</div>}
    </div>
  );
}

export default InformationEntry;

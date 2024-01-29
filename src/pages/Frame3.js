import React, { useState } from "react";
import "./Frame3.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Frame3 = () => {
  const [registrationData, setRegistrationData] = useState({
    lastname: "",
    name: "",
    patronymic: "",
    email: "",
    password: "",
    phone_number: "",
    address: "",
  });

  const history = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({
      ...registrationData,
      [name]: value,
    });
  };

  const handleRegistration = () => {
    axios.post('/api/register', registrationData)
      .then(response => {
        console.log(response.data.message);
        // Optionally, you can redirect the user to a success page or perform other actions.
        history.push('/');
      })
      .catch(error => {
        console.error('Error registering user:', error.response.data.error);
        // Handle registration error (display error message, etc.)
      });
  };

  return (
    <div className="div26">
      <img className="icon" alt="" src="/@2x.png" />
      <img className="icon1" alt="" src="/1@2x.png" />
      <b className="b18">Реєстрація</b>
      <div className="div27">
        <div className="div28" />
        <Link to="/">
          <button className="b19" onClick={handleRegistration}>Продовжити</button>
        </Link>
      </div>
      <div className="div29">
        <div className="div30">
          <div className="div28" />
          <Link to="/">
            <button className="b19">Авторизація</button>
          </Link>
        </div>
        <b className="b21">Вже є аккаунт?</b>
      </div>
      <div className="body">
        <div className="div32">
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
          <div className="child3" />
        </div>




        <input
          type="text"
          name="lastname"
          className="b25"
          placeholder="Призвище"
          value={registrationData.lastname}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="name"
          className="b26"
          placeholder="Ім'я"
          value={registrationData.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="patronymic"
          className="b27"
          placeholder="По батькові"
          value={registrationData.patronymic}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="e-mail3"
          placeholder="E-mail"
          value={registrationData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          className="b22"
          placeholder="Password"
          value={registrationData.password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="phone_number"
          className="b23"
          placeholder="Phone Number"
          value={registrationData.phone_number}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="address"
          className="b24"
          placeholder="Address"
          value={registrationData.address}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Frame3;
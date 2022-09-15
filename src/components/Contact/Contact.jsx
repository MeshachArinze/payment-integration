import React, { useState } from "react";
import { FaMailBulk, FaPhone } from "react-icons/fa";

const validName = /^[a-z\d]{5,12}$/i;
const validEmail = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
const validPassword = /^[#\w@_-]{8,20}$/;
const validTelephone = /^\d{11}$/;

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const [nameErr, setNameErr] = useState(false);
  const [telephoneErr, setTelephoneErr] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    
    
    if (!validEmail.test(email)) {
      setEmailErr(true);
    }
    if (!validPassword.test(password)) {
      setPwdError(true);
    }
    if (!validName.test(name)) {
      setNameErr(true);
    }
    if (!validTelephone.test(number)) {
      setTelephoneErr(true);
    }

    setPassword("");
    setName("");
    setEmail("");
    setNumber('');
  };


  return (
    <>
      <div className="flex flex-col bg-lightGreyp md:flex-row h-[100vh] w-[100%] ">
        <div className="flex flex-col justify-center bg-gradient-to-r md:w-[50%] from-cyan-500 to-blue-500">
          <h1 className="text-center text-lg md:text-4xl text-lightGrey capitalize">
            Contact information
          </h1>
          <p className="max-w-sm text-lg uppercase p-4 mx-auto text-lightWhite font-semibold">
            do you want a one an one contact with us; feel free to book a call
            with us{" "}
          </p>
          <div className="flex flex-col items-center">
            <div className="flex flex-row justify-center ">
              <p className="text-lightWhite mr-8">{<FaPhone />}</p>
              <p className="text-lightWhite">09131083175</p>
            </div>
            <div className="flex flex-row justify-center">
              <p className="text-lightWhite mr-8">{<FaMailBulk />}</p>
              <p className="text-lightWhite">meshachfresh@gmail.com</p>
            </div>
            <div className="flex flex-row">
              <a href=""></a>
              <a>meshachfresh@gmail.com</a>
            </div>
          </div>
        </div>
        <div>
          <form onSubmit={submit} className="flex flex-col w-[100%] px-8 justify-center">
            <div className=" justify-center m-auto  flex ">
              <input
                type="text"
                name="username"
                className="w-[80%] px-16 py-4 mb-4 border-none outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
              />
              
              {nameErr && <p>your name is invalid</p>}
              </div>
              <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailErr && <p>Your email is invalid</p>}
              </div>
              <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {pwdError && <p>Your password is invalid</p>}
              </div>
              <div>
              <input
                type="text"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              {telephoneErr && <p>your number is not valid</p>}
              </div>
              <div>
                <button type="submit">Validate</button>
              </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

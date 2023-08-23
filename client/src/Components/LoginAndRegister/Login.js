import React, { useEffect, useState } from 'react'
import "./Login.css"
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { Signup, signIn } from '../../actions/userActions';
const Login = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [logEmail, setLogEmail] = useState("");
     const [logPassword, setLogPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
     const [message, setMessage] = useState(null);
    const navigate = useNavigate();
   const dispatch = useDispatch();

   const userSignup = useSelector((state) => state.userSignup);
   const { loading, error, registered } = userSignup;
   const userSignin = useSelector((state) => state.userSignin);
   const { userInfo } = userSignin;


   useEffect(() => {
     if (userInfo) {
       navigate("/home");
     }
   }, [userInfo]);
   
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password Do Not Match");
    } else {
      setMessage(null);
      console.log("handle");
      dispatch(Signup(userName, email, password ));
    }
  };
    const submitHandlerLogin = async (e) => {
      console.log("hii");
      e.preventDefault();
      dispatch(signIn(logEmail, logPassword));
    };
     const toggleForm = () => {
       const container = document.querySelector(".container");
       container.classList.toggle("active");
     };
  return (
    <div>
      <section>
        <div className='container'>
          <div className='user signinBx'>
            <div className='imgBx'>
              <img
                src='https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg'
                alt=''
              />
            </div>
            <div className='formBx'>
              <form action='' onSubmit={submitHandlerLogin}>
                <h2>Sign In</h2>
                <input
                  type='text'
                  name=''
                  placeholder='Username'
                  value={logEmail}
                  onChange={(e) => setLogEmail(e.target.value)}
                />
                <input
                  type='password'
                  name=''
                  placeholder='Password'
                  value={logPassword}
                  onChange={(e) => setLogPassword(e.target.value)}
                />
                <input type='submit' name='' value='Login' />
                <p className='signup'>
                  Don't have an account ?
                  <a href='#' onClick={toggleForm}>
                    Sign Up.
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className='user signupBx'>
            <div className='formBx'>
              <form action='' onSubmit={submitHandler}>
                <h2>Create an account</h2>
                <input
                  type='text'
                  name=''
                  placeholder='Username'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type='email'
                  name=''
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type='password'
                  name=''
                  placeholder='Create Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type='password'
                  name=''
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <input type='submit' name='' value='Sign Up' />
                <p className='signup'>
                  Already have an account ?
                  <a href='#' onClick={toggleForm}>
                    Sign in.
                  </a>
                </p>
              </form>
            </div>
            <div className='imgBx'>
              <img
                src='https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login

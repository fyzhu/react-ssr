// containers/Login.js
import React from 'react';
import Header from '../components/Header';
const Login = () => {
  return (
    <div>
      <Header/>
      <div>This is login</div>
      <button onClick={() => {alert('666')}}>click</button>
    </div>
  )
}
export default Login

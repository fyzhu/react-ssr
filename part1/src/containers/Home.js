// containers/Home.js
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <div>This is yunfeng</div>
      <button onClick={() => {alert('666')}}>click</button>
    </div>
  )
}
export default Home

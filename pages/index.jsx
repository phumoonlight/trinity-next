import React from 'react'
import Com from '../components/Com'

const c = () => {
  console.log('click');
};

function Home() {
  return (
    <div onClick={c}>
      <Com />
      Welcome to Next.js!
    </div>
  );
}

export default Home;

import React from 'react'

const clickme = (e) => {
  console.log(e.target)
};

function Com() {
  return <button type="button" onClick={clickme}>Com</button>
}

export default Com

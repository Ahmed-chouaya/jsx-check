import React from 'react';
import meme1 from './web-meme.jpg';
import './style.css';

class App extends React.Component {

render(){
  return (
<div>
  <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src={meme1} alt="meme1"/>
    <br />
    <img src="/web-meme2.jpg" alt="meme2"/>
  </div>
  <video autoPlay width={320} height={240} controls>
    <source src='./FrontEndDeveloper.mp4' type="video/mp4" />
  </video>
</div>

);
  }
}
export default App;

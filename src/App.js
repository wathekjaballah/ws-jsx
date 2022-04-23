import logo from './logo.svg';
import './App.css';
import './style.css';
import Img1 from './imageInSrc.jpg'
function App() {
  return (
    <div className="App">
      <header className="App-header">
  
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">stickers</h1>
    <br />
    <img src={Img1} height="100" width="100" />
    <br />
    <img src="/imageInPublic.jpg" height="100" width="100"/>
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>

      </header>
    </div>
  );
}

export default App;

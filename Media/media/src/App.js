
import './App.css';
import prabhas from './images/prabhas.webp'
import kalki from './audio/kalki song.mp3';
import kalki1 from './video/kalki video.mp4'
function App() {
  return (
    <div className="App">
      <div className="devara">
        <img src='https://th.bing.com/th/id/OIP.ezK0YhLOu7vHuszRD8P5bwHaKf?rs=1&pid=ImgDetMain' alt=''></img>
        <audio src=' https://services.brninfotech.com/tws/media2/songs/Ala Vaikuntapuram lo/01 - Samajavaragamana.mp3' controls ></audio>
        <video src=' https://services.brninfotech.com/tws/media2/trailers/AlaVaikuntapuramloo.mp4' controls ></video>
         </div>
       <div className="devara1">
        <img src='./images/Devara.webp' alt=''></img>
        <audio src='./audio/All Hail The Tiger.mp3' controls></audio>
        <video src='./video/devar video.mp4' controls></video>
       </div>
       <div className="kalki">
        <img src={prabhas}></img>
        <audio src={kalki} controls></audio>
        <video src={kalki1} controls></video>
       </div>
    </div>
    
  );
}

export default App;

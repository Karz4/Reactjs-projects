import { useState,useEffect } from 'react';
import './App.css';
import axios from "axios";

function App() {

  const [profileName ,setProfilName] = useState("");
  const [profileCell ,setProfilCell] = useState("");
  const [profileImage ,setProfilImage] = useState("");
  const [profileEmail ,setProfilEmail] = useState("");

  const  profileData = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api");
      console.log(res);
      setProfilCell(res.data.results[0].cell);
      setProfilEmail(res.data.results[0].email);
      setProfilImage(res.data.results[0].picture.large);
      setProfilName(`${res.data.results[0].name.first} ${res.data.results[0].name.last}`);


    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div className="App">
      <div className='profileContainer'>
        <img src={profileImage}/>
        <h1>{profileName}</h1>
        <p>{profileEmail}</p>
        <p>{profileCell}</p>
      <button onClick={profileData}>Click for new profile</button>
      </div>
    </div>
  );
}

export default App;

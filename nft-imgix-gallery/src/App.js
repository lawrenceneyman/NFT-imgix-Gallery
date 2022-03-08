import React from "react";
import './App.css';
import Imgix from "react-imgix";

function App() {
  return (
    <div className="App">
     
     <img src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" 
        alt="imgix regular"
        />

      <Imgix src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" />

    </div>
  );
}

export default App;

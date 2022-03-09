import React from "react";
import './App.css';
import Imgix from "react-imgix";

function App() {
  return (
    <div className="App">
     
     <img 
      className="nft"
      src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" 
      alt="imgix regular"
    />
          <p>
            This is a regular imgix image.
          </p>
      
      <Imgix 
        className="nft"
        src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" 
        
        /* added sizes because react image was loading largest one always*/ 
        sizes="50vw"
      />
            <p>
              This is a React imgix image.
            </p>

      <img 
        className="nft"
        src="https://lh3.googleusercontent.com/goHtFaFglq8HLS5HmlZIRA8gTMNHrjStDsZJ0Jcq2LX_LsPxYzRjEPFtpSfH4OAi9N-I1NX6n2qLBVTlcSRrhcC-isseAj-cIO84G9k=w600" 
        alt="OpenSea NoAPI"
        />
            <p>
              This is an OpenSea image on the profile page (no API).
            </p>

      <img 
        className="nft"
        src="https://lh3.googleusercontent.com/goHtFaFglq8HLS5HmlZIRA8gTMNHrjStDsZJ0Jcq2LX_LsPxYzRjEPFtpSfH4OAi9N-I1NX6n2qLBVTlcSRrhcC-isseAj-cIO84G9k=s0" 
        alt="OpenSea NoAPI"
        />
            <p>
              This is an OpenSea image when viewing it (no API).
            </p>


            
    </div>
  );
}

export default App;

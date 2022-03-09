import React, {Component} from "react";
import Imgix from "react-imgix";


export class Images extends Component{

    render(){

        return(

            <div >
                
                <img 
      className="nft"
      src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" 
      alt="imgix regular"
    />
          <h3>
            This is a regular imgix image.
          </h3>
      
      <Imgix 
        className="nft"
        src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" 
        /* added sizes because react image was loading largest one always*/ 
        sizes="50vw"
      />
            <h3>
              This is a naked React imgix image.
            </h3>
<Imgix 
        className="nft"
        src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" 
        imgixParams={{ auto: "format,compress"  }}   
        
        /* added sizes because react image was loading largest one always*/ 
        sizes="50vw"
      />
            <h3>
              This is a React imgix image with auto= format,compress.
            </h3>
                <img 
        className="nft"
        src="https://lh3.googleusercontent.com/goHtFaFglq8HLS5HmlZIRA8gTMNHrjStDsZJ0Jcq2LX_LsPxYzRjEPFtpSfH4OAi9N-I1NX6n2qLBVTlcSRrhcC-isseAj-cIO84G9k=w600" 
        alt="OpenSea NoAPI"
        />
            <h3>
              This is an OpenSea image on the profile page (no API).
            </h3>

      <img 
        className="nft"
        src="https://lh3.googleusercontent.com/goHtFaFglq8HLS5HmlZIRA8gTMNHrjStDsZJ0Jcq2LX_LsPxYzRjEPFtpSfH4OAi9N-I1NX6n2qLBVTlcSRrhcC-isseAj-cIO84G9k=s0" 
        alt="OpenSea NoAPI"
        />
            <h3>
              This is an OpenSea image when viewing it (no API).
            </h3>

            </div>
        )
    }

}
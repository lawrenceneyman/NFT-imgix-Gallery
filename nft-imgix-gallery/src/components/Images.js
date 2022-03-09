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
                <p>
                    This is a regular imgix image. (339kb | 1920 x 1038 px)
                </p>
      

        <Imgix 
        className="nft"
        src="https://lawrence-neyman-imgix.imgix.net/chihiro016.jpg" 
        imgixParams={{ auto: "format,compress"  }}   
         /* added sizes because react image was loading largest one always*/ 
        sizes="50vw"
        />
            <p>
              This is a React imgix image with auto= format,compress. (26.1kb | 594 x 321 px)
            </p>

        <img 
        className="nft"
        src="https://lh3.googleusercontent.com/goHtFaFglq8HLS5HmlZIRA8gTMNHrjStDsZJ0Jcq2LX_LsPxYzRjEPFtpSfH4OAi9N-I1NX6n2qLBVTlcSRrhcC-isseAj-cIO84G9k=w600" 
        alt="OpenSea NoAPI"
        />
            <p>
              This is an OpenSea image on the profile page w/o OS API. (68.9kb | 600 x 324 px)
            </p>

      <img 
        className="nft"
        src="https://lh3.googleusercontent.com/goHtFaFglq8HLS5HmlZIRA8gTMNHrjStDsZJ0Jcq2LX_LsPxYzRjEPFtpSfH4OAi9N-I1NX6n2qLBVTlcSRrhcC-isseAj-cIO84G9k=s0" 
        alt="OpenSea NoAPI"
        />
            <p>
              This is an OpenSea image when viewing it fully w/o OS API. (339kb at 1920 x 1038 px)
            </p>

        </div>
        
        )
    }

}
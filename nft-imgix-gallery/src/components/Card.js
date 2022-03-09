import React from "react";

const Card = ({ nft_path}) => (
    <div className='nft'>
      <img
        src={
          nft_path
            ? nft_path
            : "https://images.unsplash.com/photo-1538152911114-73f1aa6d6128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"
        }
        alt={title}
      ></img>
      
    </div>
  );
  
  export default Card;
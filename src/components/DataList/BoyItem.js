import React from "react";

function BoyItem( {image, name, email, location, bio}){
    return(
        <div>
            <div style={{backgroundImage : `url(${image})`}}></div>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h4>{location}</h4>
            <p>{bio}</p>
        </div>
    );
}

export default BoyItem;
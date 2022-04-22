import React from "react";
import memeData from "../memeData";

export default function Meme(){

    const [memeImage, setMemeImage] = React.useState("");
    function getMemeImage(){
        const memeAry = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeAry.length);
        const url = memeAry[randomNumber].url;
        setMemeImage(url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <img className="meme--image" src={memeImage} />
            </div>
        </main>
    )
}
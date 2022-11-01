import React from "react";
import ListItem from "./ListItem";

function SongList({songs, selectedGenre}) {
    const songItems = songs.map(song => <ListItem key= {song.id} song={song} genre={selectedGenre}/>)
   // console.log (" thi is songItems:",songItems)
   return (
        <div>
        <ul className="songcontainer">
        <li>
            <p>Title</p>
            <p>Artist</p>  
            <p> Genre</p> 
            <p>Rating</p>   
        </li>       
               
        
       
        </ul>
        {songItems}
        </div>
   )
  

}


export default SongList
//R 4 tussen ronde haken van .map:song =><ListItem key= {song.id} song={song} gente={selectedGenre}/>
//R4: eachItem => console.log(" this is function eachItem:",eachItem) works? yes GOOD JOB
// <p>Title</p>
//<p>Artist</p>
//<p>Genre</p>
//<p>Rating</p> 

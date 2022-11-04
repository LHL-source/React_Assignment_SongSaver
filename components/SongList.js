import React from "react";
import ListItem from "./ListItem";
import SongForm from "./SongForm";

function SongList({songs, onItemTitleAdd, selectedGenre}) {
    const songItems = songs.map(song => <ListItem key= {song.id} song={song} genre={selectedGenre}/>)
   // console.log (" thi is songItems:",songItems)
   return (
        <div>
        <ul className="songcontainerUl">
        <li className="songcontainerLi">
            <p>Title</p>
            <p>Artist</p>  
            <p>Genre</p> 
            <p>Rating</p>   
        </li>       
               
        
       
        </ul> 
        <SongForm onSubmit={ onItemTitleAdd} />
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

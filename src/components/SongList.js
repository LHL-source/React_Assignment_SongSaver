import React from "react";
import ListItem from "./ListItem";
import SongForm from "./SongForm";

function SongList({songs, onItemTitleAdd, selectedGenre}) {
    const songItems = songs.map(song => <ListItem key= {song.id} song={song} genre={selectedGenre}/>)
 
   return (
        <div>
        <ul className="songcontainerUl">
        <li className="songcontainerLi">
            <p>Id</p>
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


import React from "react";

function ListItem ({ song, genre}){
    return (
        <li className="listcontainer">
          <div className="ttz">
            <p >{song.id}</p>
            <p >{song.title}</p>
            <p >{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.rating}</p>
            </div>
        </li>
    )

}
export default ListItem;
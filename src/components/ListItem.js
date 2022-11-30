import React from "react";

function ListItem ({ song, genre}){
    return (
        <ul className="listcontainer">
          <li className="ttz">
            <p >{song.id}</p>
            <p >{song.title}</p>
            <p >{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.rating}</p>
            </li>
        </ul>
    )

}
export default ListItem;
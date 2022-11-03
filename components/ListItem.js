import React from "react";

function ListItem ({song, genre}){
    return (
        <li className="listcontainer">
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.genre}</p>
            <p>{song.rating}</p>
        </li>
    )

}
export default ListItem;
//import React from "react";
import React, {Component} from 'react';
import SongList from './SongList';
import SongSort from './SongSort';



class SongOverview extends Component {
    constructor (props){
        super(props);
        this.state= {
            songs:[
             {id: 1, title:"Dansing queen", artist:"Abba", genre:"pop", rating: "1" },
             {id: 2, title:" Rock the boat", artist:"Rocky", genre:"Rock", rating: "2"},
             {id: 3, title:"JazzSong", artist:"Jazzzz", genre:"Jazz", rating: "3"},
              ],
              selectedGenre: "all"
             };//state
     }//constructor

     addItemToSongList=( title, artist, genre, rating)=>{
        this.setState({
            songs:[
                ...this.state.songs,
                {id: this.state.songs.length + 1,
                title: title,
                artist: artist,
                genre: genre,
                rating: rating,
                }
            ],//songs
            sort : "",

        })//setState

     }//title   

     sortSongs=()=>{
      return  console.log("Entering songoverview/function:sortSong");
     }

//hier komen de functies


        render() {
            return (
                <div className="overview">
                    <SongList 
                    songs={this.state.songs} 
                    selectedGenre={this.state.selectedGenre}
                    onItemTitleAdd={this.addItemToSongList}
                    />

                    <SongSort 
                    sortering={this.state.sort} 
                    handleClickSort={this.sortSongs} 
                    />

                </div>
                
                   );//return
        }//render
}//component

export default SongOverview;

//import React from "react";
import React, {Component} from 'react';
import SongList from './SongList';



class SongOverview extends Component {
    constructor (props){
        super(props);
        this.state= {
            songs:[
             {id: 1, title:"Dansing queen", artist:"Abba", genre:"pop", rating: "4" },
             {id: 2, title:" Rock the boat", artist:"Rocky", genre:"Rock", rating: "5"},
             {id: 3, title:"JazzSong", artist:"Jazzzz", genre:"Jazz", rating: "3"},
              ],
              selectedGenre: "all"
             };//state
     }//constructor
     addItemToSongList=(title)=>{
        this.setState({
            songs:[
                ...this.state.songs,
                {id: this.state.songs.length + 1,
                title: title,
                 }//id
            ]//songs

        })//setState

     }//title

//hier komen de functies


        render() {
            return (
                <div className="overview">
                    <SongList 
                    songs={this.state.songs} 
                    selectedGenre={this.state.selectedGenre}
                    onItemTitleAdd={this.addItemToSongList}
                    />

                </div>
                
                   );//return
        }//render
}//component

export default SongOverview;
//regel 9 t/m11: song:[
  //  { id:1, title:"abba"},
//],
//regel 17 this.state.song.title
//R.13 t/m 6 (tussen constructor en render): handleChange(event){
//     const {name, value} = event.target
//     this.setState({[song]:value})
// }
//R.28:<h1>song:{this.state.song}</h1>
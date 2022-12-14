
import React, {Component} from 'react';
import SongList from './SongList';
import SongSort from './SongSort';

export class SongOverview extends Component {
    constructor (props){
        super(props);
        this.state= {
            songs:[
             {id: 1, title:"Dansing queen", artist:"Abba", genre:"pop", rating: "2" },
             {id: 2, title:"Rock the boat", artist:"Rocky", genre:"Rock", rating: "1"},
             {id: 3, title:"Jazz Song", artist:"Jazz Artist", genre:"Jazz", rating: "3"},
              ],
              selectedGenre: "all"
             };
     }

        capitalizeSong=(str)=>{
            return str.charAt(0).toUpperCase() + str.slice(1)
           }


     addItemToSongList=( title, artist, genre, rating)=>{
        this.setState({
            songs:[
                
                ...this.state.songs,
                {id: this.state.songs.length + 1,
                title: this.capitalizeSong(title),
                artist: artist,
                genre: genre,
                rating: rating,
                }
            ],
            sort : "",

        })

     }  

    
 sortSongs=(event)=>{
        const selectedItem = event.target.value
     
     console.log(this.setState);
      this.setState({sort:selectedItem})
      switch (selectedItem){
        case "TAZ": this.setState({songs:this.state.songs.sort((a,b)=>(a.title > b.title ?1: -1))})
        break

        case "TZA": this.setState({songs:this.state.songs.sort((a,b)=>(a.title > b.title ?-1: 1))})
        break

        case "SHL": this.setState({songs:this.state.songs.sort((a,b)=>(a.rating > b.rating ?-1: 1))})
        break

        case "SLH": this.setState({songs:this.state.songs.sort((a,b)=>(a.rating > b.rating ?1: -1))})
        break
        
        
        default:
            console.log(" swicht of sortSongs")
     
     }
    }

    
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
                
                   );
        }
}


import React from 'react'

function SongSort ({sortering, handleClickSort}) {
    // console.log("entering SongSort");
    // console.log(`Entering SongSort`);
    return (

        <form className="sortering">
            <p>
              How to sort the songs?  
            </p>

        <select 
        name="sortering"
       // value={sortering.value}
        onChange={handleClickSort}
        >
            <option value="">--choose please an item---</option>
            <option value="TAZ">title a-z</option>
            <option value="TZA">title z-a</option>
            
            <option value="SHL">stars 5-1</option>
            <option value="SLH">starts 1-5</option>
           
        </select>
        </form>
    )//return

}//function


export default SongSort;

//regel 21<option value="AAZ">artist a-z</option>
//regel 22<option value="AAZ">artist a-z</option>
import React from 'react'

function SongSort ({sortering, handleClickSort}) {
    
    return (

        <form className="sortering">
            <h1>
              How to sort the songs?  
            </h1>

        <select 
        name="sortering"
        //value={sortering.value}
        onChange={handleClickSort}
        >
            <option value="">--chose please an item---</option>
            <option value="TAZ">title a-z</option>
            <option value="TZA">title z-a</option>
            
            <option value="SHL">stars 3-1</option>
            <option value="SLH">starts 1-3</option>
           
        </select>
        </form>
    )

}


export default SongSort;


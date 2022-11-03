import React, {useState} from 'react';

const SongForm =()=>{
    const [inputTitle, setInputTitle]=useState("koek");


    return(
        
        <form>
            <p>this is SongForm inputTitle: {inputTitle}</p>

            <input type="text"
                   value={inputTitle}
                   onChange={(e)=>{setInputTitle(e.target.value)}} />
        </form>

    )
}//SongForm


export default SongForm
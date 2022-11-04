import React, {useState} from 'react';

const SongForm =()=>{
    const [inputTitle, setInputTitle]=useState("");

    function onButtonPress(){
        if(inputTitle.length >0){
        console.log("this is SongForm/function/onButtonPress")
        console.log(`this is inputTitle:${inputTitle}`)

       // onSubmit(inputTitle);
        setInputTitle("");
    }}//function


    return(
        
        <form>
            <p>this is SongForm inputTitle: {inputTitle}</p>

            <input type="text"
                   value={inputTitle}
                   onChange={(e)=>{setInputTitle(e.target.value)}} 
            />

            <button className="songformbutton" onClick ={onButtonPress}
                              placeholder="button">

            </button>
        </form> 

    )
}//SongForm


export default SongForm
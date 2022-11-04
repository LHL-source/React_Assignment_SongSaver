import React, {useState} from 'react';

const SongForm =({onSubmit})=>{
    const [inputTitle, setInputTitle]=useState("");

    function onButtonPress(){

        console.log("this is songform inputTitle before if:",inputTitle)
        console.log("this is songform setInputTitle before if:",setInputTitle)
        

        if(inputTitle.length >0){
        console.log("this is SongForm/function/onButtonPress")
        console.log(`this is inputTitle after if:${inputTitle}`)
        console.log("this is songform inputTitle after if:",inputTitle)


        onSubmit(inputTitle);
        console.log("this is songform:",inputTitle)
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
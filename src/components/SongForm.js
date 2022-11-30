import React, {useState} from 'react';

const SongForm =({onSubmit})=>{
    const [inputTitle, setInputTitle]=useState("");
    const [inputArtist, setInputArtist]=useState("");
    const [dropDownGenre, setDropDownGenre]=useState("pop");    
    const [dropDownRate, setDropDownRate]=useState("3");


    
    function onButtonPress(e){
        e.preventDefault();
      
       if(inputTitle.length >0 && inputArtist.length >0 ){
           onSubmit(inputTitle,inputArtist,dropDownGenre, dropDownRate);
           setInputTitle("");
           setInputArtist("");
        }
       

    }


    return(
        
        <form className='songforminput'>
           
            <input type="text"
                   placeholder="please give a title"
                   value={inputTitle}
                   name="inputTitle"
                   onChange={(e)=>{setInputTitle(e.target.value)}} 
            />
   
           <input type="text"
                  placeholder="please give a name "
                   value={inputArtist}
                   name="inputArtist"
                   onChange={(e)=>{setInputArtist(e.target.value)}} 
            />

            <select value={dropDownGenre} onChange={(e)=>{setDropDownGenre(e.target.value)}}>
                <option value="pop">pop</option>   
                <option value="rock">rock</option>
                <option value="jazz">jazz</option>  
            </select>

            <select value={dropDownRate} onChange={(e)=>{setDropDownRate(e.target.value)}}>
                <option value="1">1</option>   
                <option value="2">2</option>
                <option value="3">3</option>  
                
            </select>
           
            <button type="submit"
                    className="songformbutton" 
                    onClick ={onButtonPress}
                    placeholder="submit"
                    >
                Add to list
            </button>
        </form> 

    )
    }


export default SongForm


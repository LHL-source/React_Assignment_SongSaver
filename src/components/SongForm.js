import React, {useState} from 'react';

const SongForm =({onSubmit})=>{
    const [inputTitle, setInputTitle]=useState("");
    const [inputArtist, setInputArtist]=useState("");
    const [dropDownGenre, setDropDownGenre]=useState("pop");    
    const [dropDownRate, setDropDownRate]=useState("3");


    
    function onButtonPress(e){
        e.preventDefault();
        console.log("this is SongForm/function/onButtonPress");
        //console.log on screen for inputTitle
        console.log("this is songform inputTitle before if:",inputTitle)
        console.log("this is songform setInputTitle before if:",setInputTitle)

        console.log("this is songform inputArtist before if:",inputArtist)
        console.log("this is songform setInputArtist before if:",setInputArtist)


        console.log("this is songform dropDownRate before if:",dropDownRate)
        console.log("this is songform setDropDownGenre before if:",setDropDownGenre)

        console.log("this is songform dropDownGenre before if:",dropDownGenre)
        console.log("this is songform setDropDownRate before if:",setDropDownRate)
        
        if(inputTitle.length >0 && inputArtist.length >0 ){
          
           console.log(`this is inputTitle after if:${inputTitle}`);//works ? y
           console.log(`this is inputArtist after if:${inputArtist}`);//works ? y
           console.log(`this is dropDownGenre after if:${dropDownGenre}`);//works? y 
           console.log(`this is dropDownGenre after if:${dropDownRate}`);//works? y 
           //indien 1 van de niet ingevuld dan alert: vul alle 4 vakken in svp!
           // alert ('hallo world')
           onSubmit(inputTitle,inputArtist,dropDownGenre, dropDownRate);
           setInputTitle("");
           setInputArtist("");
        }//if
       

    }//function onBnPr


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
                    
            </button>
        </form> 

    )
    }//SongForm


export default SongForm
//r34: <p>this is SongForm e.target.value: {e.target.value}</p>
//r33:   <p>this is SongForm setInputTitle: {setInputTitle}</p>
//5 nov 22:dropdownGenre/Render works? yes Good Job
//r37      <p>this is SongForm state of dropDownGenre: {dropDownGenre}</p>
//r 48 t/m52  <select value={dropDownGenre} onChange={(e)=>{setDropDownGenre(e.target.value)}}>
 //           <option value="pop">pop</option>   
  //          <option value="rock">rock</option>
   //         <option value="jazz">jazz</option>  
 //           </select>
//  <p>this is SongForm state of inputTitle: {inputTitle}</p>
//  <p>this is SongForm state of inputArtist: {inputArtist}</p>
//  <p>this is SongForm state of dropDownGenre: {dropDownGenre}</p>
//  <p>this is SongForm state of dropRate: {dropDownRate}</p>

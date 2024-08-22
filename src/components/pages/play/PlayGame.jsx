import { Link, useNavigate } from "react-router-dom"
import TextinputContainer from "../../textInputForm/TextInputContainer"
import { useState } from "react";
import MaskedText from "../../maskedText/MaskedText";
import LetterButton from "../../LetterButton/LetterButton";
function PlayGame(){
    const navigate=useNavigate();

    function submitHandler(){
navigate('/start')
    }
    // let arr=[1,2,3,4,5]
    // let [arr,setArr]=useState([-2,10,2,6,1,9])

    // function sortArray(){
    //     let sorrt=[...arr].sort((a,b)=>a-b)
    //     setArr(sorrt)
    // }


    return (
        <>
        {/* <ul className="list-disc ml-5">{arr.map((e,index)=><li key={index}>{e}</li>)}</ul> */}
        
        <div>
            
            <h1>play game</h1>
            <MaskedText text={"humble"} usedLetter={['b','e']}/>
            <hr />
            <Link to={"/start"}>start game</Link>
            <TextinputContainer onSubmit={submitHandler}/>
            {/* <button  onClick={sortArray}>sort</button> */}

            
            <LetterButton usedLetters={['b','e']}/>
            <hr />
           
        </div>
        </>
      
        
        
       
    )
}

export default PlayGame
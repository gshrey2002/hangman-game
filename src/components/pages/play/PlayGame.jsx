import { Link, useLocation, useNavigate } from "react-router-dom"
import TextinputContainer from "../../textInputForm/TextInputContainer"
import { useState } from "react";
import MaskedText from "../../maskedText/MaskedText";
import LetterButton from "../../LetterButton/LetterButton";
import HangManImg from "/Users/pw/react/hangman/src/components/HangMan/HangMan.jsx"

function PlayGame(){
    const navigate=useNavigate();

//     function submitHandler(){
// navigate('/start')
//     }
    // let arr=[1,2,3,4,5]
    // let [arr,setArr]=useState([-2,10,2,6,1,9])

    // function sortArray(){
    //     let sorrt=[...arr].sort((a,b)=>a-b)
    //     setArr(sorrt)
    // }

const [usedLetter,setUsedLetters]=useState([]);
const location=useLocation();
const wordSelected=location.state?.WordSelected

const [step,setStep]=useState(0)
const handleLetterClick=function(letter){
    if(wordSelected.toUpperCase().includes(letter)){
        console.log("correct");
    }else{
        console.log("Incorrect");
        setStep(step+1)
    }
setUsedLetters([...usedLetter,letter])
}
    return (
        <>
        {/* <ul className="list-disc ml-5">{arr.map((e,index)=><li key={index}>{e}</li>)}</ul> */}
        
        <div>
            
            <h1>play game</h1>
            <MaskedText text={wordSelected} usedLetter={usedLetter} />
            <hr />
            <Link to={"/start"} className="text-blue-600 underline hover:bg-blue-800">start game</Link>
            {/* <TextinputContainer onSubmit={submitHandler}/> */}
            {/* <button  onClick={sortArray}>sort</button> */}
<div className='flex justify-between items-center'>
            <div className="basis-2/4">

            <LetterButton text={wordSelected} usedLetters={usedLetter} onLetterClick={handleLetterClick}/>
            </div>
            <div className="basis-2/4 flex justify-center"> 
                 <HangManImg step={step}/>
            </div>
            </div>

            <hr />
            
            
        </div>
      
        </>
      
        
        
       
    )
}

export default PlayGame
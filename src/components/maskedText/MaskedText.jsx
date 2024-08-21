
// text-word to be guesed

import {getAllCharacter} from "./MaskedTextContainer"

// user letter-user have already guessed
function MaskedText({text,usedLetter}){

const letters=getAllCharacter(text,usedLetter).split('');

    return (
       <>
       {letters.map((letter,index)=>{
        return (
            <span key={`letter- ${index}`} className="inline-block mx-1">{letter}</span>
        )
       })}
       
       
       </>
    )
}


export default MaskedText

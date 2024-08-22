
const alphabet=new Array(26).fill('').map((e,index)=>
    String.fromCharCode(65+index)
)

function LetterButton({usedLetters,onLetterClick}){
    const selectedLetter=new Set(usedLetters.join('').toUpperCase().split(''))
    const buttonStyle=function(letter){
        if(selectedLetter.has(letter)){
            return 'bg-red-600 border-red-700 hover-bg-blue-600'
        }else{
            return `bg-blue-600 border-blue-800 hover:bg-blue-800 `
        }
    }

    function handleClick(event){
const character=event.target.value;
onLetterClick?.(character)
    }
    const buttons=alphabet.map(letter=>{
        return (
            <button key={`buttons-${letter}`} className={`h-12 w-12 m-1 rounded-md focus:outline-none text-white ${buttonStyle(letter)}`} value={letter} disabled={selectedLetter.has(letter)} onClick={handleClick}>
                {letter}
            </button>
        )
    })
return (
    <>
    {buttons}
    
    </>
)
}
export default LetterButton
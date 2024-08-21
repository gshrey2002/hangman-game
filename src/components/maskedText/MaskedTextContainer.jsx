export function getAllCharacter(word,usedletters){
    usedletters=usedletters.map(letter=>letter.toUpperCase());
    const guessedletter=new Set(usedletters);
    const char=word.toUpperCase().split('').map(char=>{
        if(guessedletter.has(char)){
            return char;
        }
        return '_';
    });
    return char.join('');

}

 
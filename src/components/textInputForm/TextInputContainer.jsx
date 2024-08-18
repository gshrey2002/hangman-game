import TextInputForm from "./TextInputForm";
import { useState } from "react";


function TextinputContainer({onSubmit}){
    const [value,setValue]= useState('');
const [inputType , setInputType]=useState('password')

function handleFormSubmit(event){
event.preventDefault();
console.log("form submitted",value);
onSubmit?.(value); //if on submit is defined we will call it with value

}

function handleTextInputOnChange(event){
    console.log("on change handled");
    console.log(event.target.value);
    setValue(event.target.value)

}

return (
   <TextInputForm 
   
   handleFormSubmit={handleFormSubmit}
   handleTextInputOnChange={handleTextInputOnChange}
   value={value}
   inputType={inputType}
   setInputType={setInputType}
   />
)
}

export default TextinputContainer
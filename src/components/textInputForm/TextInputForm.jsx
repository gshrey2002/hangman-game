import { useState } from "react";
import Button from "../Buttons/Button";
import TextInput from "../textInput/TextInput";

function TextInputForm({onSubmit}){

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
        <form className="flex items-end" onSubmit={handleFormSubmit}>

            <div className="mr-2 flex-1">

                <TextInput 
                label={"Enter a Word or Pharase"}
                type={inputType}
                onChange={handleTextInputOnChange}
                value={value}
                />
      
            </div>
            <div className="flex">
                    <Button
                    text="OK"
                    type="submit"
                    
                    />
                </div>

            <div className="flex">
                <Button
                text={inputType==='password' ? 'show':'hide'}
                type="submit"
                onClickHandler={()=>setInputType(inputType==='password' ? 'text':'password')}
                />
                
            </div>
        </form>
    )

}

export default TextInputForm
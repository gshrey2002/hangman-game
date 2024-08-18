
import Button from "../Buttons/Button";
import TextInput from "../textInput/TextInput";

function TextInputForm({handleFormSubmit,handleTextInputOnChange,value,inputType,setInputType}){

   
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
                    buttontype="submit"
                    style="style1"
                    
                    
                    />
                </div>

            <div className="flex" >
                <Button
                text={inputType==='password' ? 'show':'hide'}
                buttontype="button"
                onClickHandler={()=>setInputType(inputType==='password' ? 'text':'password')}
                />
                
            </div>
        </form>
    )

}

export default TextInputForm
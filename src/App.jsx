import Button from "./components/Buttons/Button"
import TextInput from "./components/textInput/TextInput"
import TextInputForm from "./components/textInputForm/TextInputForm"

function App(){
  return (
    <div>
    <h1 className="font-semibold text-3xl">hello Welcome to Hangman</h1>
    {/* <h2 className="font-mono">hello shrey</h2> */}
    {/* <Button text="hello world" buttontype="submit" style="style1" onClickHandler={()=>{console.log("1st button")}}/>
    <Button text="2 " buttontype="button"style="style2" onClickHandler={()=>{console.log("2st button")}}/>
    <Button text="3 " buttontype="button"style="style3" onClickHandler={()=>{console.log("3st button")}}/>
    <Button text="8 " buttontype="button" /> */}
    {/* <TextInput label={"hello world"} value="" onChange={()=>{}}/> */}
    <TextInputForm onSubmit={(value)=>{console.log("value from hidden form of onSubmit" ,value)}}/>
    </div>
  )
}

export default App
import { Route, Routes } from "react-router-dom"
import Button from "./components/Buttons/Button"
import TextInput from "./components/textInput/TextInput"
import TextinputContainer from "./components/textInputForm/TextInputContainer"
import PlayGame from "./components/pages/play/PlayGame"
import StartGame from "./components/pages/start/StartGame"

function App(){
  return (
    // <div>
    // <h1 className="font-semibold text-3xl">hello Welcome to Hangman</h1>
    // {/* <h2 className="font-mono">hello shrey</h2> */}
    // {/* <Button text="hello world" buttontype="submit" style="style1" onClickHandler={()=>{console.log("1st button")}}/>
    // <Button text="2 " buttontype="button"style="style2" onClickHandler={()=>{console.log("2st button")}}/>
    // <Button text="3 " buttontype="button"style="style3" onClickHandler={()=>{console.log("3st button")}}/>
    // <Button text="8 " buttontype="button" /> */}
    // {/* <TextInput label={"hello world"} value="" onChange={()=>{}}/> */}
    // <TextinputContainer onSubmit={(value)=>{console.log("value from hidden form of onSubmit" ,value)}}/>

    // </div>

    <Routes>
<Route path="/play" element={<PlayGame/>}/>
<Route path="/start"element={<StartGame/>}/>
<Route path="*"element={<div>Not found</div>}/>
    </Routes>
  )
}

export default App
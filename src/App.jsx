import Button from "./components/Buttons/Button"

function App(){
  return (
    <div>
    <h1 className="font-semibold text-3xl">hello world</h1>
    <h2 className="font-mono">hello shrey</h2>
    <Button text="hello world" buttontype="submit" style="style1" onClickHandler={()=>{console.log("1st button")}}/>
    <Button text="2 " buttontype="button"style="style2" onClickHandler={()=>{console.log("2st button")}}/>
    <Button text="3 " buttontype="button"style="style3" onClickHandler={()=>{console.log("3st button")}}/>
    <Button text="8 " buttontype="button" />
    </div>
  )
}

export default App
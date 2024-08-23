import { useNavigate } from "react-router-dom";
import TextinputContainer from "../../textInputForm/TextInputContainer";

function StartGame(){
    const navigate=useNavigate();

        function submitHandler(value){
    navigate('/play',{state:{WordSelected:value}})
        }

    return (
        <div>

            <h1>start game</h1>
                        <TextinputContainer onSubmit={submitHandler}/>

        </div>
        
        
       
    )
}

export default StartGame
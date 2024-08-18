import { Link } from "react-router-dom"

function PlayGame(){

    return (
        <div>

            <h1>play game</h1>
            <Link to={"/start"}>start game</Link>
        </div>
        
        
       
    )
}

export default PlayGame
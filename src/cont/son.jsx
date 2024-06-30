import { useContext } from "react"
import { NameContext } from "../App"

function Son(){

    const nam=useContext(NameContext)
    return(
        <div>
            <h1>My name is {nam.name}</h1>
        </div>
    )
}

export default Son
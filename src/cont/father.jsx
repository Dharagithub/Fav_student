import { useContext } from "react"
import { NameContext } from "../App"

function Father(){
    const data = useContext(NameContext)
    console.log(data)
    return(
        <div>
            <h1>My name is {data.name}</h1>
        </div>
    )
}

export default Father
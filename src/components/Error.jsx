import { useRouteError } from "react-router-dom"

const Error=()=>{
    const err=useRouteError()
    return (
        <div>
            error
            <h2>{err.status}</h2>
        </div>
    )
}

export default Error
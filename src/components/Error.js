 import { useRouteError } from "react-router-dom"
 const Error = ()=>{
    const err = useRouteError();
    console.log(err,"error")
    return(
        <div>
           <h1>{err.status} : {err.statusText}</h1>
            <h1>Oops ! this page not found </h1>
        </div>
    )
}
export default Error
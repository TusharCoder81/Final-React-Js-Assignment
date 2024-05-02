import { user } from "./Login";
import './success.css'
export default function Success(){

    return(
        <h1 className='success'>{user} logged in successfully..!</h1>
    )
}
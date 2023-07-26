<<<<<<< HEAD
import Form from "./Form"
import {useState} from "react"

export default function DisplayForm({addEmployee}) {
    
    const [isShown, setIsShown] = useState(false)
    let buttonText = "Add Employee"
    let buttonText2 = "Hide the Form"

    function display() {
        setIsShown(current => !current)

    }
    
    return (
        <div>
            <button onClick={display}> {!isShown ? buttonText : buttonText2}</button>
            {isShown && <Form addEmployee={addEmployee} />}
        </div>

        
    )
    
=======
import Form from "./Form"
import {useState} from "react"

export default function DisplayForm({addEmployee}) {
    
    const [isShown, setIsShown] = useState(false)
    let buttonText = "Add Employee"
    let buttonText2 = "Hide the Form"

    function display() {
        setIsShown(current => !current)

    }
    
    return (
        <div>
            <button onClick={display}> {!isShown ? buttonText : buttonText2}</button>
            {isShown && <Form addEmployee={addEmployee} />}
        </div>

        
    )
    
>>>>>>> 0c6707eba90b234c2716823429e7ef33bbe71cb4
}
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";



function EmployeePage({employees}) {

    let [list, setList] = useState({})
    const params = useParams()

    useEffect( () => {
        console.log('hjg')
        let test = employees.filter((emp) => {
            
            if (emp.id == params.id) {
                return true
            } 
            return false
        })
        setList(test[0])     
    }, [])

    console.log( "this is list[0]")



    return ( 
        <div>
            {list.name && (
            <div>
                <div  className="item">
      <img src={list.headshot} alt="headshot" />
      <div>
        <h3>{list.name}</h3>
        <p> {list.title}</p>
      </div>
    </div>
            </div>)}
        </div>
     );
}

export default EmployeePage;
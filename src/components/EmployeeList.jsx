<<<<<<< HEAD
import EmployeeListItem from "./EmployeeListitem";
import { data } from "../data";


function EmployeeList({ employees }) {
  return employees.map((employee, index) => {
    return <EmployeeListItem key={index} person={employee} />;
  });
}

export default EmployeeList;
=======
import EmployeeListItem from "./EmployeeListitem";
import { data } from "../data";


function EmployeeList({ employees }) {
  return employees.map((employee, index) => {
    return <EmployeeListItem key={index} person={employee} />;
  });
}

export default EmployeeList;
>>>>>>> 0c6707eba90b234c2716823429e7ef33bbe71cb4

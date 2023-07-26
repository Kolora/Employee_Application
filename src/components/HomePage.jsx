<<<<<<< HEAD
import Search from "./Search";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import "./list.css";
import DisplayForm from "./DisplayForm";

function HomePage({ employees, addEmployee }) {
  return (
    <div className="home">
      <Header title="Employee Directory" />
      <Search />
      <EmployeeList employees={employees} />
      <DisplayForm addEmployee={addEmployee}/>
    </div>
  );
}

export default HomePage;
=======
import Search from "./Search";
import EmployeeList from "./EmployeeList";
import Header from "./Header";
import "./list.css";
import DisplayForm from "./DisplayForm";

function HomePage({ employees, addEmployee }) {
  return (
    <div className="home">
      <Header title="Employee Directory" />
      <Search />
      <EmployeeList employees={employees} />
      <DisplayForm addEmployee={addEmployee}/>
    </div>
  );
}

export default HomePage;
>>>>>>> 0c6707eba90b234c2716823429e7ef33bbe71cb4

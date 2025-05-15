/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>Campus Name: {campus.name}</h1>
      <p>Address: {campus.address}</p>
      <p>Description: {campus.description}</p>
      <p>List of Students:</p>
      {campus.students && campus.students.length > 0 ? (
        campus.students.map(student => {
          const fullName = `${student.firstname} ${student.lastname}`;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{fullName}</h2>
              </Link>
            </div>
          );
        })
      ) : (
        <p>No students are currently enrolled at this campus.</p>
      )}
    </div>
  );
};

export default CampusView;
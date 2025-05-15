/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {

  const {campus, deleteCampus } = props;

  if (!campus) {
    return <p>Loading campus...</p>;
  }

  const { name, address, description, imageUrl, students } = campus
  
  const defaultUrl = "https://s29068.pcdn.co/wp-content/uploads/campus-shot-768x432.jpg.optimal.jpg";

  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>Campus Name: {name}</h1>
      <p>Address: {address}</p>
      
      <img
        src={imageUrl}
        alt={`${name}`}
        onError={e => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultUrl;
        }}
        width="500"
      />

      <h3>Description: </h3>
      <p>{description}</p>

      <Link to={`/editcampus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>
      <br/>

      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      <br/>
      
      <Link to={`/students`}>
        <button>Enroll Students</button>
      </Link>

      <h1>List of Students:</h1>
      {students && students.length > 0 ? (
        students.map(student => {
          const fullName = `${student.firstname} ${student.lastname}`;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{fullName}</h2>
              </Link>
              <Link to={`/editstudent/${student.id}`}>
                <button>Edit Student</button>
              </Link>
              <button onClick={() => props.onUnenroll(student.id)} >Unenroll Student</button>
            </div>
          );
        })
      ) : (
        <p>No students are currently enrolled at this campus.</p>
      )}
      <br/><br/>

    </div>
  );
};

export default CampusView;
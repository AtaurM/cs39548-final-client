/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from 'react-router-dom';

const StudentView = (props) => {
  const { student, deleteStudent } = props;

  if (!student) {
    return <p>Loading student...</p>;
  }

  const { firstname, lastname, imageUrl, email, gpa, campus } = student;

  const defaultUrl = "https://static.vecteezy.com/system/resources/thumbnails/024/983/914/small_2x/simple-user-default-icon-free-png.png"

  return (
    <div>
      <h1>{firstname + " " + lastname}</h1>

      <img
        src={imageUrl}
        alt={`${firstname} ${lastname}`}
        onError={e => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultUrl;
        }}
        width="250"
      />

      <p>Email: {email}</p>
      <p>GPA: {gpa !== null ? parseFloat(gpa).toFixed(2) : 'N/A'}</p>

      {campus ? (
        <Link to={`/campus/${campus.id}`}>
          <p>Campus: {campus.name}</p>
        </Link>
      ) : (
        <p>This student is not enrolled at a campus.</p>
      )}

      <Link to={`/editstudent/${student.id}`}>
        <button>Edit Student</button>
      </Link>
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
      
      <br/>
      <br/>
      <Link to={`/students`}>
        <button>Return to All Students</button>
      </Link>

    </div>
  );
};

export default StudentView;

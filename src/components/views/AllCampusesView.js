/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {allCampuses, deleteCampus} = props;
  // If there is no campus, display a message.
  if (!allCampuses.length) {
    return <div>
      <p>There are no campuses.</p>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
    </div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
      
          <img
            src={campus.imageUrl}
            alt={`${campus.name}`}
            onError={e => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = campus.defaultUrl;
            }}
            width="500"
          />
          
          <p>{campus.description}</p>
          <Link to={`/editcampus/${campus.id}`}>
            <button>Edit Campus</button>
          </Link>
          <button onClick={() => deleteCampus(campus.id)}>Delete</button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
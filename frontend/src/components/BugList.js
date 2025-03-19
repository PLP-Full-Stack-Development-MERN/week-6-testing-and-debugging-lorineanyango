import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BugList = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/bugs").then((response) => {
      setBugs(response.data);
    });
  }, []);

  const deleteBug = (id) => {
    axios.delete(`http://localhost:5000/api/bugs/${id}`).then(() => {
      setBugs(bugs.filter((bug) => bug._id !== id));
    });
  };

  return (
    <div>
      <Link to="/new">Report New Bug</Link>
      <ul>
        {bugs.map((bug) => (
          <li key={bug._id}>
            {bug.title} - {bug.status}
            <button onClick={() => deleteBug(bug._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;

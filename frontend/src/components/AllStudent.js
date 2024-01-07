import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AllStudent() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:5000/student")
        .then((res) => {
          console.log(res);
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Students</h2>
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student._id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

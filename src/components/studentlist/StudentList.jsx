import React from 'react';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="student-list">
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <span>
              {student.name} | Roll No: {student.rollno} | Email: {student.email}
            </span>
            <button onClick={() => onEdit(index)} className="btn-edit">
              Edit
            </button>
            <button onClick={() => onDelete(index)} className="btn-delete">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;

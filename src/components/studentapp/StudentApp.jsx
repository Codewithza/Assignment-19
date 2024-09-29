import React, { useState } from 'react';
import StudentForm from '../studentForm/StudentForm';
import StudentList from '../studentlist/StudentList';
import './StudentApp.css'; 

const StudentApp = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddStudent = (values) => {
    if (isEditing) {
      const updatedStudents = students.map((student, index) =>
        index === editingStudent ? values : student
      );
      setStudents(updatedStudents);
      setIsEditing(false);
      setEditingStudent(null);
    } else {
      setStudents([...students, values]);
    }
  };

  const handleEditStudent = (index) => {
    setEditingStudent(index);
    setIsEditing(true);
  };

  const handleDeleteStudent = (index) => {
    const filteredStudents = students.filter((_, i) => i !== index);
    setStudents(filteredStudents);
  };

  return (
    <div className="student-app">
      <h1>Student Management App</h1>
      <StudentForm
        onSubmit={handleAddStudent}
        initialValues={
          isEditing ? students[editingStudent] : { name: '', rollno: '', email: '' }
        }
        isEdit={isEditing}
      />
      <StudentList
        students={students}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />
    </div>
  );
};

export default StudentApp;

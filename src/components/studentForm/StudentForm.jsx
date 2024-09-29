import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const StudentForm = ({ onSubmit, initialValues, isEdit }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    rollno: Yup.number().required('Roll No is required').positive().integer(),
    email: Yup.string().required('Email is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="student-form">
        <div className="form-group">
          <label>Name:</label>
          <Field name="name" type="text" className="form-control" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div className="form-group">
          <label>Roll No:</label>
          <Field name="rollno" type="number" className="form-control" />
          <ErrorMessage name="rollno" component="div" className="error-message" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <Field name="email" type="email" className="form-control" />
          <ErrorMessage name="email" component="div" className="error-message" />
        </div>
        <button type="submit" className="btn-submit">
          {isEdit ? 'Update Student' : 'Add Student'}
        </button>
      </Form>
    </Formik>
  );
};

export default StudentForm;

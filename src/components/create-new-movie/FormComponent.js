import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import '../../styles/components/createNewMovie.css';

import Error from './Error';
const validationSchema = Yup.object().shape({
  imageUrl: Yup.string().required('Please enter  URL'),
  title: Yup.string().required('Must enter a title'),
  subtitle: Yup.string().required('Must enter a title'),
  description: Yup.string().required('Must enter a description'),
});

function FormComponent({ addNewMovie, setMovieState }) {
  return (
    <div>
      <Formik
        initialValues={{ imageUrl: '', title: '', subtitle: '', description: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          addNewMovie(values);
          setMovieState(false);
          resetForm();
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <label htmlFor="imageUrl">URL</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.imageUrl}
              ></input>
            </div>
            <Error touched={touched.imageUrl} message={errors.imageUrl}></Error>
            <div className="input-row">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              ></input>
            </div>
            <Error touched={touched.title} message={errors.title}></Error>
            <div className="input-row">
              <label htmlFor="subtitle"> Subtitle</label>
              <input
                type="text"
                name="subtitle"
                id="subtitle"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subtitle}
              ></input>
            </div>
            <Error touched={touched.subtitle} message={errors.subtitle}></Error>
            <div className="input-row">
              <label htmlFor="title">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              ></input>
            </div>
            <Error touched={touched.description} message={errors.description}></Error>

            <div className="input-row">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
              <button onClick={() => setMovieState(false)}>Back</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default FormComponent;

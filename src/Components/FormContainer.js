import React from 'react';
import AppHeader from './AppHeader';
import Form from './Form';

const FormContainer = () => {

  return (
      <div className="App">
        <AppHeader title='ADD MEETING FORM'/>
        <div className="form-container">
          <Form />
        </div>
      </div>
   )
} 

export default FormContainer;
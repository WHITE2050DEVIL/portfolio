import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    // Send form data to the server using Fetch API
    fetch('http://localhost:5000/api/submit', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Form submitted successfully');
          setErrorMessage('');
          // Add any additional logic or UI changes upon successful form submission
        } else {
          setSuccessMessage('');
          setErrorMessage('Error submitting form');
          // Handle any error cases or display error messages
        }
      })
      .catch((error) => {
        setSuccessMessage('');
        setErrorMessage('Error submitting form');
        console.error('Error submitting form:', error);
        // Handle any error cases or display error messages
      });
  };

  return (
    <div>
      <h1>Form Submission</h1>
      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default Form;

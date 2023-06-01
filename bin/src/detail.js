import React, { useState, useEffect } from 'react';

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetch('/api/submissions') // Replace with the correct server-side endpoint
      .then((response) => response.json())
      .then((data) => setSubmissions(data))
      .catch((error) => console.error('Error fetching submissions:', error));
  }, []);

  return (
    <div>
      <h1>Submitted Data</h1>
      {submissions.map((submission, index) => (
        <div key={index}>
          <p>Name: {submission.name}</p>
          <p>Email: {submission.email}</p>
          <p>Message: {submission.message}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Submissions;

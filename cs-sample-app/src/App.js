import React, { useState } from 'react';

function App() {
  const [comment, setComment] = useState('');
  const [submittedComment, setSubmittedComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedComment(comment); // Vulnerable to XSS
    setComment('');
  };

  return (
    <div className="App">
      <h1>Comment Box</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Your Comment:</h2>
      <p>{submittedComment}</p> {/* Unsanitized output */}
    </div>
  );
}

export default App;

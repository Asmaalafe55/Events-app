import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle forgot password
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="email">Enter your email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPasswordForm;

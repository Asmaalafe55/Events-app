import React, { useState, useEffect } from 'react';
import Axios from '../../../utils/axios';
import signInSchema from '../../../utils/schemas/signInSchema';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Alert } from 'antd';

import styles from '../SignPage.module.scss';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const router = useRouter();

  // Check if the user is already signed in when the component mounts
  useEffect(() => {
    const isUserSignedIn = () => {
      const accessToken = localStorage.getItem('accessToken');
      return accessToken !== null;
    };

    if (isUserSignedIn()) {
      router.push('/profile');
    }
  }, [router]); // Dependencies array to ensure this effect runs only on component mount or router change

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate the input using signInSchema
    const { error: validationError } = signInSchema.validate(
      {
        email,
        password,
      },
      { abortEarly: false }
    );

    if (validationError) {
      setError(validationError.details[0].message);
      return;
    }

    try {
      // Send a POST request to login endpoint with email and password
      const response = await Axios.post('/login', {
        email,
        password,
      });

      const { id, email: userEmail, access_token } = response.data;

      // Clear the form and error state
      setEmail('');
      setPassword('');
      setError('');

      // Store user information and token in localStorage
      localStorage.setItem('userId', id);
      localStorage.setItem('userEmail', userEmail);
      localStorage.setItem('accessToken', access_token);

      console.log('User signed in successfully:', response.data);

      router.push('/profile'); // Redirect to profile page after successful login
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred during login';
      setError(errorMessage);
      console.log(error);
    }
  };

  return (
    <div className={styles.sign_page}>
      <div>
        <div className={styles.form_container}>
          <p className={styles.title}>SIGN IN</p>
          <form onSubmit={onSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <Link href="/auth/forgot-password">Forgot Password?</Link>
              </div>
            </div>

            <button className={styles.submit_btn} type="submit">
              SIGN IN
            </button>
          </form>

          {error && (
            <Alert
              className={styles.error}
              message={error}
              type="error"
              showIcon
            />
          )}

          <div className={styles.social_message}>
            <p>Login with social accounts</p>
          </div>

          <div className={styles.social_icons}>
            <button aria-label="Log in with Google">
              <GoogleOutlined />
            </button>
            <button aria-label="Log in with Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
              </svg>
            </button>
          </div>

          <p className={styles.signup}>
            Don't have an account?
            <a rel="noopener noreferrer" href="/auth/sign-up">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

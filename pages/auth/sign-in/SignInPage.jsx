import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Axios from '../../../utils/axios';
import Link from 'next/link';
import signInSchema from '../../../utils/schemas/signInSchema';
import { Alert } from 'antd';
import { GoogleOutlined, GithubOutlined } from '@ant-design/icons';

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
            <button aria-label="Log in with GitHub">
              <GoogleOutlined />
              <GithubOutlined />
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

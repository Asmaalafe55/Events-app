import GoogleLogin from 'react-google-button';

const GoogleAuthButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle authentication success
  };

  const onFailure = (error) => {
    console.log('Authentication failed:', error);
  };

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      onClick={responseGoogle}
      onFailure={onFailure}
    />
  );
};

export default GoogleAuthButton;

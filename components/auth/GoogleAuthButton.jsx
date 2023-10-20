import GoogleLogin from 'react-google-button';
import { GoogleOutlined } from '@ant-design/icons';

const GoogleAuthButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle authentication success
  };

  const onFailure = (error) => {
    console.log('Authentication failed:', error);
  };

  return (
    <button aria-label="Log in with Google">
      <GoogleOutlined />
      <GoogleLogin
        clientId={process.env.CLIENT_ID}
        onClick={responseGoogle}
        onFailure={onFailure}
        style={{ display: 'none' }}
        id="google-auth-button"
      />
    </button>
  );
};

export default GoogleAuthButton;

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
    <GoogleLogin
      clientId={process.env.CLIENT_ID}
      onClick={responseGoogle}
      onFailure={onFailure}
    />
  );
};

export default GoogleAuthButton;

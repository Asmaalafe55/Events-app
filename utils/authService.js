import axios from 'axios';

let tokenRenewalTimeout;

const AuthService = {
  checkTokenExpiry: async () => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const { exp } = JSON.parse(atob(token.split('.')[1])); // Decode token to get expiration time
      const currentTime = Math.floor(Date.now() / 1000); // Current timestamp in seconds

      // Check if the token is about to expire (5 minutes before)
      if (exp - currentTime <= 300) {
        // Token is about to expire, renew the token
        await AuthService.renewToken();
      }
    }
    return Promise.resolve(); // Resolve immediately if the token doesn't need renewal
  },

  renewToken: async () => {
    // Make a request to the server to renew the token
    try {
      const response = await axios.post('/renew-token', null, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.status === 200) {
        const newToken = response.data.access_token;

        // Update the token in localStorage with the new token
        localStorage.setItem('accessToken', newToken);
      }
    } catch (error) {
      console.error('Error renewing token:', error);
    }
  },

  // Function to start periodic token check
  startTokenCheck: () => {
    tokenRenewalTimeout = setInterval(AuthService.checkTokenExpiry, 60000); // Check every minute
  },

  // Function to clear the token renewal interval
  stopTokenCheck: () => {
    clearInterval(tokenRenewalTimeout);
  },
};

export default AuthService;

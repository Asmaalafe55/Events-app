const AuthService = {
  tokenRenewalTimeout: null,

  checkTokenExpiry: () => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      const { exp } = JSON.parse(atob(token.split('.')[1])); // Decode token to get expiration time
      const currentTime = Math.floor(Date.now() / 1000); // Current timestamp in seconds

      // Check if the token is about to expire (5 minutes before)
      if (exp - currentTime <= 300) {
        // Token is about to expire, renew the token
        renewToken();
      }
    }
  },

  renewToken: async () => {
    // Make a request to the server to renew the token
    try {
      const response = await fetch('/renew-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        // Add any required request body data
      });

      if (response.ok) {
        const data = await response.json();
        const newToken = data.access_token;

        // Update the token in localStorage with the new token
        localStorage.setItem('accessToken', newToken);
      }
    } catch (error) {
      console.error('Error renewing token:', error);
    }
  },

  // Function to start periodic token check
  startTokenCheck: () => {
    // Start periodic token check and store the interval ID in tokenRenewalTimeout
    AuthService.tokenRenewalTimeout = setInterval(
      AuthService.checkTokenExpiry,
      60000
    );
  },
};

export default AuthService;

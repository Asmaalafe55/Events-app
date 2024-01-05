import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Add your custom logic for local authentication here
        // Example: Check credentials against your database
        const user = { id: 1, name: 'Example User' };

        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID, // note that i changed the env file
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other authentication providers as needed
  ],
  pages: {
    signIn: '/auth/sign-in', // Customize the sign-in page URL
  },
  // Add additional configurations if necessary
});

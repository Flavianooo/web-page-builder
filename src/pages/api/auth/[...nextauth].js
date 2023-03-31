import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  jwt: {
    signingKey:
      '{"kty":"oct","kid":"cCKWouyk1OCox1Aq4AQiSjBdU0L6CG_sGtQ5haBR1UY","alg":"HS512","k":"mYq1PEgTC1Vhs5H1rBiXyE_EVhBLz2D0GWmDYzQqzrc"}%',
  },
};
export default NextAuth(authOptions);

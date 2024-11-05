import GoogleProvider from "next-auth/providers/google";
import connectToDb from "@/config/databaseconnect";
import User from "@/models/User";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    //After signIn success
    async signIn({ profile }) {
      //Connect to the database
      await connectToDb();
      //check if user exists
      const user = await User.findOne({ email: profile.email });
      //if not,create user
      if (!user) {
        const username = profile.name.slice(0, 20);
        await User.create({
          email: profile.email,
          username,
          image: profile.picture,
        });
      }
      //return true to allow sign in
      return true;
    },
    //Sesssion callback function that modifies the session object
    async session({ session }) {
      //Get user from database
      const user = await User.findOne({ email:session.user.email});
      //Assign the user id from the session
      session.user.id = user._id;
      //Return the session
      return session;
    },
  },
};

export default authOptions;

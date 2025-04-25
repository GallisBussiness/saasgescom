import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { bearer } from "better-auth/plugins";
 
// Check if MongoDB URL is defined, otherwise use a default local MongoDB URL
if (!process.env.MONGODB_URL) {
  console.warn('MONGODB_URL environment variable is not defined. Using default local MongoDB URL.');
}

const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/saas';
const client = new MongoClient(mongodbUrl);
const db = client.db();
 
export const auth = betterAuth({
  database: mongodbAdapter(db),
  trustedOrigins:["https://passionate-wonder-production-b84c.up.railway.app"],
  emailAndPassword:{
    enabled: true,
    // sendResetPassword: async ({user, url, token}, request) => {
    //   await sendEmail({
    //     to: user.email,
    //     subject: "Reset your password",
    //     text: `Click the link to reset your password: ${url}`,
    //   });
  },
  socialProviders: {
    google: { 
        clientId: process.env.GOOGLE_CLIENT_ID as string, 
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
    }, 
},
plugins: [bearer()]
});
import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService{
    client= new Client();
    account;

    constructor(){
        this.client
          .setEndpoint(config.appwriteUrl)
          .setProject(config.projectId);

        this.account=new Account(this.client)
    }

    //create Account
    async createAccount({ email, password, name }) {
        try {
            return await this.account.create(ID.unique(), email, password, name);
        } catch (error) {
            console.error("Account creation failed:", error); // Log the actual error
            return { success: false, message: error.message }; // Return real error
        }
    }
    
    // login account
    async logIn({email, password}){
       try {
        return this.account.createEmailPasswordSession(email,password)
       } catch (error) {
          console.log('this give the error', error)
          return { success: false, message: "Failed to login account. Please try again." };
       }
    }

    //logout account
    async logOut(){
        return await this.account.deleteSessions()
    }

   //get the current user
   async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.error("Failed to get current user:", error);
        return null;
    }
}
}



const authService= new AuthService();
export default authService
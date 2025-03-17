import { Client,ID, Databases, Storage, Query} from "appwrite";
import config from "../config/config";

export class Service{
     client= new Client();
     database;
     storage;

     constructor(){
        this.client
         .setEndpoint(config.appwriteUrl)
         .setProject(config.projectId);

        this.database=new Databases(this.client)
        this.storage=new Storage(this.client)
     }

     //create post
    async createPost({title, slug, content, featuredImage,
        status, userId
    })
    {
      try {
        return await this.database.createDocument(
            config.dataBaseId,
            config.collectionId,
            slug,
            {
                title,
                content,
                status,
                featuredImage,
                userId
            }
        )
      } catch (error) {
        console.log("An Error occured in createPost: ",error)
      }
    }
    
    //update post
    async updatePost(slug,{title, content, featuredImage,
        status }){
        try {
            return await this.database.updateDocument(
                config.dataBaseId,
                config.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log('error in updatePost: ',error)
        }
    }

    //delete post
    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                config.dataBaseId,
                config.collectionId,
                slug
            )
            return true
        } catch (error) {
            console.log('Error in delete post: ',error)
            return false
        }
    }

    //get post
    async getpost(slug){
        try {
            return await this.database.getDocument(
                config.dataBaseId,
                config.collectionId,
                slug
            )
        } catch (error) {
            console.log('Error in getting the post: ',error)
        }
    }

    //get all posts
    async getPosts(queries=[Query.equal('stats','active')]){
        try {
            return await this.database.listDocuments(
                config.dataBaseId,
                config.collectionId,
                queries
            )
        } catch (error) {
            console.log('Error in getting all the post: ',error)
            return false
        }
    }

    //upload a file
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.bucketId,
                ID.unique(),
                file
            )
        } catch (error) {
          console.log('Error in uploading a file', error);
          return false   
        }
    }

    //delet a file
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.bucketId,
                fileId
            )
           return true;
        } catch (error) {
          console.log('Error in deleting a file: ',error)
          return false;   
        }
    }

    //See file preview in storage
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.bucketId,
            fileId
        )
    }

}

const service=new Service();

export default service
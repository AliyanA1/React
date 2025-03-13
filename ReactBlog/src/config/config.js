//config file for import and then export all together the .env data
const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),

    projectId:String(import.meta.env.VITE_APPWRIT_PROJECT_ID),

    dataBaseId:String(import.meta.env.VITE_APPWRIT_DATABASE_ID),

    collectionId:String(import.meta.env.VITE_APPWRIT_COLLECTIN_ID),

    bucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default config
import {v2 as cloudinary} from cloudinary
import fs from 'fs'


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePAth) => {
    try {
        if(!localFilePAth) return null
        //upload the file in cloudinary
        const response= await cloudinary.uploader.upload(localFilePAth, {
            resource_type:"auto"
        })
        //file successfully upload ho gyi hai
        console.log("FIle is uploaded on cloudinary",response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePAth)//remove the locally saved temporary file as the  upload operation got failed

        return null;
    }
}

export {uploadOnCloudinary}
import jwt from "jsonwebtoken";

// Function to genarate a token for a user
export const genarateToken = (userId)=>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET);
    return token;
}
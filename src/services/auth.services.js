import User from "../models/User.js"

export const signupService = async (authInfo)=>{
    const user = await User.create(authInfo)
    return  user
    
    }
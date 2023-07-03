import User from "../models/User.js"


export const registerService = async (authInfo)=>{
    const user = await User.create(authInfo)
    return  user
    
    }
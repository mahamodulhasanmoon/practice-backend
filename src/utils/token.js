import  jwt from 'jsonwebtoken'

export const genarateToken = (userInfo)=>{

    const payload = {
      email :  userInfo.email,
      role:userInfo.role
    }

    const token = jwt.sign(payload , process.env.TOKEN_SECRET,{
        expiresIn:'2hr'
    });
    return token;

};
import { genarateToken } from "../utils/token.js";

export const createUser = async (req, res, next) => {
    try {
      const userData = await signupService(req.body);
      
      const token = genarateToken(userData.email)
      res.status(200).json({
        status: "success",
        message: "Successfully created account",
        data: {
          userInfo :userData,
          token
  
        }
      });
    } catch (error) {
      res.status(400).json({
        status: "failed",
        message: "403 Bad Request",
        error: error.message,
      });
    }
  };
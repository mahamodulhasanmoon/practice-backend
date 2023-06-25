import express from 'express';
const routes = express.Router();


// check health routes
routes.get("/health", (_req, res) => {
    res.status(200).json({ 
      status:200,
       message: "success" 
      });
  });

export default routes
import express from 'express';
import authRoutes from '../routes/authRoutes.js';
const router = express.Router();
// authentication routes

router.use('/api/v1/',authRoutes)


// check health routes
router.get("/health", (_req, res) => {
    res.status(200).json({ 
      status:200,
       message: "success" 
      });
  });

export default router
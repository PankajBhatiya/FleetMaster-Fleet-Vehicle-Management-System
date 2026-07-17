import express from 'express';
import { 
  register, 
  login, 
  logout, 
  refresh, 
  getMe, 
  updateProfile
} from '../Controllers/authController.js';
import { protect } from '../Middlewares/auth.js';
import { authLimiter } from '../Middlewares/rateLimiter.js';

const router = express.Router();

router.use(authLimiter);

// Public Authentication Routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.post('/refresh', refresh);

// Protected User Profile Routes (Requires Valid JWT Access Token)
router.get('/me', protect, getMe);
router.put('/update-profile', protect, updateProfile);

export default router;
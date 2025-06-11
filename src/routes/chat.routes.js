import express from 'express';
import { pergutarChat } from '../controllers/chat.controller.js';

const router = express.Router()

router.post('/perguntar', pergutarChat);

export default router

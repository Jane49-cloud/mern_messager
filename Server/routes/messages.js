import express from "express";
import { createMessage, getMessage } from "../controllers/messaging.js";

const router = express.Router();

router.post("/new-message", createMessage);
router.get("/messages/sync", getMessage);

export default router;

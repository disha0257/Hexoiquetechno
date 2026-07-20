import express from "express";

import {
  createContact,
} from "../controllers/contactController.js";

const router = express.Router();


// ==========================================
// CREATE NEW CONTACT REQUEST
// POST /api/contact
// ==========================================

router.post(
  "/",
  createContact
);


// ==========================================
// TEST CONTACT API
// GET /api/contact/test
// ==========================================

router.get(
  "/test",
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Contact API is working successfully",
    });
  }
);


export default router;
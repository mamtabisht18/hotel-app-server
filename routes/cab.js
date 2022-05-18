import express from "express";
import formidable from "express-formidable";

const router = express.Router();
import { requireSignin } from "../middlewares";

const { bookCab } = require("../controllers/cab");

router.post("/book-cab", requireSignin, formidable(), bookCab);

module.exports = router;

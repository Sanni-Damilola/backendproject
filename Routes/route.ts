import { Router } from "express";
import {
  postBook,
  getAllbooks,
  getOneBook,
  searchBooks,
  myViews,
} from "../controller/control";
import { coverUpload } from "../Config/mult";

const router = Router();

router.route("/post").post(coverUpload, postBook);
router.route("/getall").get(getAllbooks);
router.route("/getone/:id").get(getOneBook);
router.route("/search").get(searchBooks);
router.route("/views/:id").patch(myViews);

export default router;

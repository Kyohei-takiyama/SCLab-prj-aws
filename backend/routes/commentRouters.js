// npmライブラリインポート
const express = require("express");

// ライブラリ外インポート
const {
  getAllComments,
  createComment,
  updateCommentById,
  deleteCommentById,
} = require("../controllers/commentController");

const router = express.Router();

//=============================================GET
router.get("/", getAllComments);

//=============================================POST

router.post("/", createComment);
//=============================================PUT
router.put("/:id", updateCommentById);

//=============================================DELETE
router.delete("/:id", deleteCommentById);

module.exports = router;

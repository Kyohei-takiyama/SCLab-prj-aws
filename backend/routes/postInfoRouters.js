// npmライブラリインポート
const express = require("express");

// ライブラリ外インポート
const {
  getPostInfoById,
  createPostInfo,
  updatePostInfoById,
  deletePostInfoById,
} = require("../controllers/postInfoController");

const router = express.Router();

//=============================================GET
router.get("/:id", getPostInfoById);

//=============================================POST
router.post("/", createPostInfo);

//=============================================PUT
router.put("/:id", updatePostInfoById);

//=============================================DELETE
router.delete("/:id", deletePostInfoById);
module.exports = router;

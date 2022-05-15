/**
 * @description ユーザルーティングクラス、処理はコントローラクラスに記載
 */

// npmライブラリ
const express = require("express");

// ライブラリ外インポート
const {
  updateUser,
  getAllUser,
  registerUser,
  deleteUser,
} = require("../controllers/userController");
const router = express.Router();

//=============================================GET
router.get("/", getAllUser);

//=============================================POST
router.post("/", registerUser);

//=============================================PUT
router.put("/:id", updateUser);

//=============================================DELETE
router.delete("/:id", deleteUser);

module.exports = router;

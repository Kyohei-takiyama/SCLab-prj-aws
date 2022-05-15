const commentModel = require("../model/commentModel");
const userModel = require("../model/userModel");

//=============================================GET
/**
 * @description コメント全取得
 * @method GET
 * @route /api/v1/comments
 * @body  なし
 */
const getAllComments = async (req, res) => {
  try {
    const comments = await commentModel.find();
    if (!comments) {
      return res
        .status(500)
        .json({ message: "コメントが見つかりませんでした" });
    }
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: "コメント取得に失敗しました" });
  }
};

//=============================================POST
/**
 * @description コメント作成
 * @method POST
 * @route /api/v1/comments
 * @body commentDetail, auther(userId)
 */
const createComment = async (req, res) => {
  const { commentDetail, userId } = req.body;
  const newComment = new commentModel({
    commentDetail,
    auther: userId,
    userId,
  });
  try {
    const saveComment = await newComment.save();
    if (!saveComment) {
      return res.status(400).json({ message: "コメントの作成に失敗しました" });
    }
    return res.status(201).json(saveComment);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

//=============================================PUT
/**
 * @description コメント更新
 * @method PUT
 * @route /api/v1/comments/:id
 * @param id
 * @body commentDetail,userId
 */
const updateCommentById = async (req, res) => {
  const { id: commentId } = req.params;
  // 更新できるのは、自分自身の情報か、システム管理者のみ
  try {
    const comment = await commentModel.findById(commentId);
    if ((comment && req.body.userId === comment.userId) || req.body.isAdmin) {
      const newComment = await commentModel.findByIdAndUpdate(
        commentId,
        {
          commentDetail: req.body.commentDetail,
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ newComment, message: "ユーザが更新されました" });
    }
    return res.status(400).json({ message: "コメントの更新に失敗しました" });
  } catch (error) {
    return res.status(403).json({ message: error });
  }
};

//=============================================DELETE
/**
 * @description コメント削除
 * @method DELETE
 * @route  /api/v1/comments/:id
 * @param id
 * @body userId,isAdmin
 */
const deleteCommentById = async (req, res) => {
  const { id: commentId } = req.params;
  const comment = await commentModel.findById(commentId);
  try {
    const comment = await commentModel.findById(commentId);
    if ((comment && req.body.userId === comment.userId) || req.body.isAdmin) {
      const deletedComment = await commentModel.findByIdAndDelete(commentId);
      if (!deletedComment) {
        return res
          .status(403)
          .json({ message: "削除するコメントが見つかりません" });
      }
      return res.status(201).json({ message: "コメントを削除しました" });
    }
    return res.status(400).json({ message: "コメントの削除に失敗しました" });
  } catch (error) {
    return res.status(403).json({ message: error });
  }
};

module.exports = {
  getAllComments,
  createComment,
  updateCommentById,
  deleteCommentById,
};

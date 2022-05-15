// npmライブラリインポート

// ライブラリ外インポート
const postInfo = require("../model/postInfoModel");

//=============================================GET
/**
 * @description 投稿取得
 * @method GET
 * @route /api/v1/post/:id
 * @body  なし
 * @param id
 */
const getPostInfoById = async (req, res) => {
  const { id: postId } = req.params;
  try {
    const post = await postInfo.findById(postId);
    if (!post) {
      return res.status(500).json({ message: "投稿取得に失敗しました" });
    }
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error, message: "投稿取得に失敗しました" });
  }
};

//=============================================POST

/**
 * @description 投稿作成
 * @method POST
 * @route /api/v1/posts
 * @body username, email, password
 */
const createPostInfo = async (req, res) => {
  const { title, description, userId } = req.body;
  if (!title || !description || !userId) {
    return res.status(400).json({ massege: "値が不十分です" });
  }
  const newPost = new postInfo(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(201).json(savedPost);
  } catch (error) {
    return res.status(500).json({ error, message: "投稿作成に失敗しました" });
  }
};

//=============================================PUT
/**
 * @description 投稿更新
 * @method PUT
 * @route /api/v1/users/:id
 * @param id
 * @body userId,isAdmin
 */
const updatePostInfoById = async (req, res) => {
  const { id: postId } = req.params;
  try {
    const post = await postInfo.findById(postId);
    if (post.userId === req.body.userId) {
      const newPost = await post.updateOne(
        {
          $set: req.body,
        },
        { new: true }
      );
      return res
        .status(200)
        .json({ newPost, message: "投稿更新に成功しました" });
    }
    return res.status(403).json({ message: "他の人の投稿を編集出来ません" });
  } catch (error) {
    return res.status(500).status.json(error);
  }
};

//=============================================DELETE

/**
 * @description 投稿削除
 * @method DELETE
 * @route /api/v1/posts/:id
 * @param id
 * @body userId
 */
const deletePostInfoById = async (req, res) => {
  const { id: postId } = req.params;
  try {
    const post = await postInfo.findById(postId);
    console.log(post, postId, req.body.userId);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json({ message: "投稿削除に成功しました" });
    }
    if (!post) return res.status(403).json({ message: "投稿が見つかりません" });
    return res.status(403).json({ message: "他の人の投稿を編集出来ません" });
  } catch (error) {
    return res.status(500).status.json(error);
  }
};

module.exports = {
  getPostInfoById,
  createPostInfo,
  updatePostInfoById,
  deletePostInfoById,
};

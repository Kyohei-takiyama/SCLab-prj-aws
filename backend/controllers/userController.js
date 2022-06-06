const userModel = require("../model/userModel");

//=============================================GET
/**
 * @description ユーザ全取得
 * @method GET
 * @route /api/v1/users
 * @body  なし
 */
const getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();
    if (!user) {
      return res.status(500).json({ message: "ユーザが見つかりませんでした" });
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "ユーザ取得に失敗しました" });
  }
};

//=============================================POST
/**
 * @description ユーザ作成
 * @method POST
 * @route /api/v1/users
 * @body username, email, password
 */
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400).json({ massege: "値が不十分です" });
  }

  // ユーザがすでに登録済みか確認処理
  try {
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "このメールアドレスを持つユーザは既に登録済みです" });
    }
  } catch (error) {
    return res.status.json({ error, message: "ユーザ作成に失敗しました" });
  }

  /**
   * @description ユーザ作成処理
   * @returns 新規作成されたユーザ
   */
  try {
    const user = await userModel.create({
      username,
      email,
      password,
    });

    // ユーザが新規作成されたか確認
    if (user) {
      const { id, username, email, password } = user;
      return res.status(201).json({
        id,
        username,
        email,
        password,
      });
    } else {
      return res.status(400).json({ massege: "ユーザの作成に失敗しました" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error, message: "ユーザの作成に失敗しました" });
  }
};

/**
 * @description login
 * @method POST
 * @route /api/v1/users/login
 * @body  なし
 */
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).send("ユーザが見つかりません");

    const valiedPassword = password === user.password;
    if (!valiedPassword) return res.status(400).json("パスワードが違います");

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//=============================================PUT
/**
 * @description ユーザ更新
 * @method PUT
 * @route /api/v1/users/:id
 * @param id
 * @body userId,isAdmin
 */
const updateUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // 更新できるのは、自分自身の情報か、システム管理者のみ
  if (req.body.userId === id || req.body.isAdmin) {
    try {
      const user = await userModel.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        { new: true }
      );
      return res.status(200).json({ user, message: "ユーザが更新されました" });
    } catch (error) {
      return res
        .status(403)
        .json({ message: "自分以外の情報は更新できません" });
    }
  } else {
    return res.status(400).json({ message: "ユーザが見つかりません" });
  }
};

//=============================================DELETE
/**
 * @description ユーザ削除
 * @method DELETE
 * @route  /api/v1/users/:id
 * @param id
 * @body userId,isAdmin
 */
const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (req.body.userId === id || req.body.isAdmin) {
    try {
      const user = await userModel.findByIdAndDelete(id);
      if (!user) {
        return res.status(403).json({ message: "ユーザが見つかりません" });
      }
      return res.status(200).json({ message: "ユーザを削除しました" });
    } catch (error) {
      return res
        .status(403)
        .json({ message: "自分以外のユーザは削除できません" });
    }
  } else {
    return res
      .status(500)
      .json({ message: "ユーザを削除する権限がありません" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUser,
  updateUser,
  deleteUser,
};

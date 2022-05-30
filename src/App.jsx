/**
 * @description
 *  フォルダ名はキャメルケース、ファイル名はアッパーキャメル
 *  コンポーネントファイルを作成する場合は、拡張子はjsxがおすすめです
 *  コンポーネントのひな型コマンド　rfce
 */
import "./App.css";

// 外部ライブラリ
// マテリアルUI
import Material from "./materialuisample/Material";

/**
 * @author 瀧山
 * @description
 * 　Router : Router配下でルーティングが出来るようになる
 *   Routes : ルーティング定義の親
 *   Route : ルーティング定義の子
 *    @param path="パスを記載" element={<ルーティング先のコンポーネントを記載>}
 *   Link : aタグのリアクトルータ版
 *    @param to="パスを記載"
 *  useNavigate : ナビゲートさせる関数 使用方法はMaterialページ参照
 *  useParams : パスパラメータを取得 使用方法はProfileページ参照
 */
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

// コンポーネント
import Home from "./pages/home/Home";
import Notfoundpage from "./pages/error/404/Notfoundpage";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";

// コンテキスト
import { UserInfoContext } from "./components/providers/UserInfoProvider";
import { useContext } from "react";

function App() {
  // コンテキストチェック
  const contextUserInfoValue = useContext(UserInfoContext);
  console.log("contextUserInfoValue", contextUserInfoValue);

  return (
    <Router>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/material">MaterialPage</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/material" element={<Material />} />
        <Route path="/profile/:userid" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer title="ServiceCloudLab" description="CX命" />
    </Router>
  );
}

export default App;

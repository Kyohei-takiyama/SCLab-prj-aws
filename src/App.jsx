/**
 * @description
 *  フォルダ名はキャメルケース、ファイル名はアッパーキャメル
 *  コンポーネントファイルを作成する場合は、拡張子はjsxがおすすめです
 *  コンポーネントのひな型コマンド　rfce
 */

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
import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// コンポーネント
import Home from "./pages/home/Home";
import Notfoundpage from "./pages/error/404/Notfoundpage";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import SignUp from "./pages/signup/SignUp";

// コンテキスト
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";

function App() {
  // コンテキストチェック
  const { user } = useContext(AuthContext);
  console.log("AuthContext", user);

  return (
    <Router>
      {/* <nav>
         <Link to="/">Home</Link>
         <Link to="/material">MaterialPage</Link>
       </nav> */}
      <Routes>
        <Route path="/" element={user ? <Home user={user} /> : <SignUp />} />
        <Route path="/profile/:userid" element={<Profile />} />
        {/* ログインに成功しユーザ情報が取得できた場合はホーム画面へリダイレクト */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {/* ユーザ作成に成功しユーザ情報が取得できた場合はホーム画面へリダイレクト */}
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route path="*" element={<Notfoundpage />} />
      </Routes>
      <Footer
        title="ServiceCloudLab"
        description="customer service and support"
      />
    </Router>
  );
}

export default App;

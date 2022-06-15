import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import axios from "axios";
// グローバルコンテキスト
// import { useContext } from "react";
// import { UserInfoContext } from "../../components/providers/UserInfoProvider";
import { useNavigate } from "react-router-dom";
// import { loginCall } from "../../actionCalls";
// import { AuthContext } from "../../state/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

export default function Login() {
  // ステート
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // コンテキスト
  // const contextValue = useContext(UserInfoContext);
  // const { user, isFetching, error, dispatch } = useContext(AuthContext);

  // ナビゲート
  let navigate = useNavigate();

  // submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // loginCall(
    //   {
    //     email: username,
    //     password,
    //   },
    //   dispatch
    // );

    // console.log(user);

    // console.log(username);
    // console.log(password);

    // ログイン処理
    // authHandler();
  };

  // 認証ロジック
  // const authHandler = async () => {
  //   try {
  //     // ログインチェック
  //     const result = await axios.post("/", {
  //       username,
  //       password,
  //     });
  //     if (result) {
  //       const {
  //         userInfo: { id, organizationId },
  //       } = result.data;
  //       console.log("userId : " + id, "organizationId : " + organizationId);
  //       // グローバルコンテキストに値をセット
  //       const { setUserInfo } = contextValue;
  //       setUserInfo({
  //         orgId: organizationId,
  //         userId: id,
  //         isAuthed: true,
  //         password,
  //         username,
  //       });
  //       navigate("/");
  //     } else {
  //       return console.log("reslutがnullです");
  //     }
  //   } catch (error) {
  //     console.error("error", error);
  //   }
  // };

  return (
    <div className="loginform">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                type="email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                minRows="5"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {"パスワードをお忘れですか？"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"アカウントを作成する"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

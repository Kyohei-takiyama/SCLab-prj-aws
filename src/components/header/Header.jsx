import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { Link, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { UserInfoContext } from "../providers/UserInfoProvider";

function Header(props) {
  const { sections, title } = props;

  // onClick={() => navigate("/")} => ホーム画面へルーティング
  let navigate = useNavigate();

  const contextUserInfoValue = React.useContext(UserInfoContext);
  const { userInfo } = contextUserInfoValue;

  return (
    <>
      {userInfo.isAuthed ? (
        <React.Fragment>
          <Toolbar
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              flex: 2,
              justifyContent: "space-between",
            }}
          >
            <div className="">
              <IconButton>
                <FavoriteIcon style={{ color: "#1976D2" }} />
              </IconButton>
              <Button size="small">Service Cloud Lab</Button>
            </div>
          </Toolbar>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Toolbar
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              flex: 2,
              justifyContent: "space-between",
            }}
          >
            <div className="">
              <IconButton>
                <FavoriteIcon style={{ color: "#1976D2" }} />
              </IconButton>
              <Button size="small">Service Cloud Lab</Button>
            </div>
            <div className="">
              <Button variant="contained" size="small" sx={{ mr: 2 }}>
                Sign up
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="outlined"
                size="small"
              >
                SIGN IN
              </Button>
            </div>
          </Toolbar>
        </React.Fragment>
      )}
    </>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;

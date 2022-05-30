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

function Header(props) {
  const { sections, title } = props;

  // onClick={() => navigate("/")} => ホーム画面へルーティング
  let navigate = useNavigate();

  return (
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
        {/* <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography> */}
        <IconButton>{/* <SearchIcon /> */}</IconButton>
        <div className="">
          <Button variant="contained" size="small" sx={{ mr: 2 }}>
            Sign up
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outlined"
            size="small"
          >
            Log in
          </Button>
        </div>
      </Toolbar>
      {/* <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar> */}
    </React.Fragment>
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

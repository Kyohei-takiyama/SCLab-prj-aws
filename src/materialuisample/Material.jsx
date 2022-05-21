import React from "react";

// Material UI
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

// スタイル設定
import { useStyles } from "../styles";
// ルーティング
import { useNavigate, useParams } from "react-router-dom";

// カード初期値
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Material() {
  const classes = useStyles();

  // onClick={() => navigate("/")} => ホーム画面へルーティング
  let navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Favorite className={classes.icon} />
          <Typography variant="h6" style={{ margin: "0 10px" }}>
            Service Cloud Lab
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          {/* <Container maxWidth="sm" style={{ marginTop: "100px" }}> */}
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Service Cloud Lab
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecoundary"
              paragraph
            >
              Service Cloud Lab
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate("/")}
                  >
                    ホームへ
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    個人の投稿を見る
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Header
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      bodyddddddddddddddddddddddddddddddddddddddddddddddddd
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          color="text"
          variant="subtitle1"
          align="center"
          gutterBottom
        >
          Footer
        </Typography>
      </footer>
    </>
  );
}

export default Material;

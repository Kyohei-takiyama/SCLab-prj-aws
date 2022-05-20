// スタイルをあてるオブジェクトを作成できる
import { makeStyles } from "@material-ui/core/styles";

// スタイル設定
export const useStyles = makeStyles((thema) => ({
  container: {
    backgroundColor: thema.palette.background.paper,
    padding: thema.spacing(8, 0, 6),
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px , 0",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: thema.palette.background.paper,
    padding: "50px 0",
  },
}));

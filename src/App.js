import { Avatar, Button, Divider, makeStyles, Typography } from "@material-ui/core";

import MainBackground from "./assets/jpg/mrjapure-season-2.jpg";
import "./App.css";
import Cast from "./component/Cast";
import TnC from "./component/TnC";

const useStyle = makeStyles((theme) => ({
  app: {
    // background: theme.palette.primary.main
  },
  homeWrapper: {
    width: "100%",
    backgroundColor: "black",
    height: "auto",
    "& .homeContent": {
      width: "100%",
      minWidth: "1000px",
      background: `url(${MainBackground}) no-repeat`,
      backgroundSize: "100% 100%",
      margin: "0 auto",
      height: "500px",
    },
  },
  thirdContainer: {
    width: '100%',
    background: 'black',
    height: 'auto',
    padding: '60px',
    paddingTop: 0,
    boxSizing: 'border-box',
    '& .thirdContent': {
      width: '100%',
      maxWidth: '1324px',
      minWidth: '1000px',
      margin: '0 auto',
      minHeight: '300px',
      backgroundColor: 'rgb(37, 36, 36)',
      padding: '40px',
      background: `url(${MainBackground}) no-repeat`,
      backgroundSize: '100% 100%',
      boxSizing: 'border-box',
    }
  },
  btn: {
    borderRadius: "100px",
    color: "black",
    fontWeight: "600",
    fontSize: "12px",
  },
}));

function App() {
  const classes = useStyle();

  return (
    <div className={classes.app}>
      <div className={classes.homeWrapper}>
        <div className="homeContent"></div>
      </div>
      <Cast/>
      <div className={classes.thirdContainer}>
        <div className="thirdContent"></div>
      </div>
      <TnC/>
    </div>
  );
}
export default App;

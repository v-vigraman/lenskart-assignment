import { makeStyles, Typography, Divider, Button } from "@material-ui/core";

import MainBackground from "./assets/jpg/mrjapure-season-2.jpg";
import LandingImage from "./assets/png/primeMirzapur.png";
import FooterImage from "./assets/png/footer.PNG";
import Cast from "./component/Cast";
import TnC from "./component/TnC";
import Contact from "./component/Contact";
import "./App.css";

const useStyle = makeStyles((theme) => ({
  homeWrapper: {
    width: "100%",
    backgroundColor: "black",
    height: "auto",
    "& .homeContent": {
      width: "100%",
      minWidth: "1000px",
      display: 'flex',
      background: `url(${MainBackground}) no-repeat`,
      backgroundSize: "100% 100%",
      margin: "0 auto",
      height: "500px",
    },
    '& .mirzapurContent': {
      width: '600px',
      height: '200px',
      marginBottom: '20px'
    }
  },
  thirdContainer: {
    width: "100%",
    background: "black",
    height: "auto",
    padding: "60px",
    paddingTop: 0,
    boxSizing: "border-box",
    "& .thirdContent": {
      width: "100%",
      maxWidth: "1324px",
      minWidth: "1000px",
      margin: "0 auto",
      minHeight: "300px",
      backgroundColor: "rgb(37, 36, 36)",
      padding: "40px",
      display: "flex",
      background: `url(${MainBackground}) no-repeat`,
      backgroundSize: "100% 100%",
      boxSizing: "border-box",
    },
  },
  leftContent: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      textAlign: "center",
      fontWeight: 'bold',
      marginBottom: '20px'
    },
    "& span": {
      textAlign: "center",
      fontWeight: 'bolder'
    },
  },
  btn: {
    borderRadius: "100px",
    color: "black",
    fontWeight: "600",
    fontSize: "12px",
  },
  innerText: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  footer: {
    width: "100%",
    height: "620px",
    margin: "0px",
    background: `url(${FooterImage}) no-repeat`,
    backgroundSize: "100% 100%",
  },
  contactWrapper: {
    width: "100%",
    minHeight: "120px",
    background: "black",
    padding: "40px",
    boxSizing: "border-box",
    "& .contactContent": {
      width: "1324px",
    },
  },
  contactContent: {
    maxWidth: "1324px",
    height: "auto",
    margin: "0 auto",
  },
}));

function App() {
  const classes = useStyle();

  return (
    <main className={classes.app}>
      <div className={classes.homeWrapper}>
        <div className="homeContent">
          <div className={classes.leftContent}>
            <div className="mirzapurContent">
              <figure>
                <img src={LandingImage} width="100%" height="100%" />
              </figure>
            </div>
            <Typography component="p" color="secondary">
              Shop the Mirzapur Collection & 20 Lucky Winners per day to win
              <br/>
              <Typography component="span">
                Amazon Fire TV Stick
              </Typography>
            </Typography>
            <Button
              className={classes.btn}
              color="primary"
              style={{color: '#fff'}}
              variant="contained"
            >
              View Collection
            </Button>
          </div>
        </div>
      </div>
      <Cast />
      <section className={classes.thirdContainer}>
        <div className="thirdContent">
          <div className={classes.leftContent}>
            <Typography component="p" color="secondary">
              Shop the Mirzapur Collection & 20 Lucky Winners per day to win
              <br/>
              <Typography component="span">
                Amazon Fire TV Stick
              </Typography>
            </Typography>
            <Button
              className={classes.btn}
              color="secondary"
              variant="contained"
            >
              View Collection
            </Button>
          </div>
        </div>
      </section>
      <TnC />
      <Contact />
      <footer className={classes.footer}></footer>
    </main>
  );
}
export default App;

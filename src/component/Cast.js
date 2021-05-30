import React from "react";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";

import { CAST_IMAGE1, CAST_IMAGE2, CAST_IMAGE3 } from "../utils/constant";
import Shades from "../assets/jpg/shades.jpg";
import DividerMark from "./common/DividerMark";

const useStyle = makeStyles((theme) => ({
  btn: {
    borderRadius: "100px",
    color: "black",
    fontWeight: "600",
    fontSize: "12px",
  },
  secondContainer: {
    width: "100%",
    background: "#000",
    height: "auto",
    padding: "60px",
    boxSizing: "border-box",
    "& .secondContent": {
      maxWidth: "1324px",
      minWidth: "1000px",
      minHeight: "300px",
      backgroundColor: "rgb(37, 36, 36)",
      padding: "40px",
      margin: "0 auto",
      boxSizing: "border-box",
    },
    "& .contentCenter": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
    },
    "& .boldHeading": {
      fontWeight: 600,
      color: "orangered",
      fontSize: "32px",
    },
    "& .rowBlock": {
      display: "flex",
      justifyContent: "space-around",
      "& .columnBlock": {
        display: "flex",
        flexDirection: "column",
        width: "290px",
        height: "auto",
        margin: "50px 0",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px 10px",
      },
      "& .roundBlock": {
        width: "180px",
        height: "180px",
        border: "1px solid tan",
        borderRadius: "50%",
        borderWidth: "4px",
        borderColor: "orangered",
        // background: url('./assets/jpg/person.jpg') no-repeat,
      },
      "& .innerText": {
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px",
      },
      "& .shadeImage": {
        width: "200px",
      },
    },
  },
}));

const Cast = () => {
  const classes = useStyle();
  return (
    <div className={classes.secondContainer}>
      <div className="secondContent">
        <div className="contentCenter">
          <div className="boldHeading">BOLD, DARING & STURDY</div>
          <Typography variant="h6" color="secondary">
            These Pilots are perfect for that Grunge Look
          </Typography>
          <DividerMark variant='middle' />
        </div>
        <div className="rowBlock">
          <div className="columnBlock">
            <Avatar
              src={CAST_IMAGE1}
              alt="Akhandanand-Tripathi"
              className="roundBlock"
            />
            <Typography component="p" color="secondary" className="innerText">
              The iron-fisted{" "}
              <Typography component="span" color="primary">
                Akhandanand Tripathi{" "}
              </Typography>
              is a millionare carpet exporter and the mafia don of mirzapur
            </Typography>
            <div className="shadeImage">
              <img src={Shades} width="100%" />
            </div>
            <Typography component="p" color="secondary" className="innerText">
              VINCENT CHASE
              <br />
              <Typography component="p" color="secondary">
                Golden Green Full Rim
              </Typography>
            </Typography>
            <Button
              className={classes.btn}
              color="secondary"
              variant="contained"
            >
              Watch Now
            </Button>
          </div>
          <div className="columnBlock">
            <Avatar
              src={CAST_IMAGE2}
              alt="Munna-Tripathi"
              className="roundBlock"
            />
            <Typography component="p" color="secondary" className="innerText">
              Akhandanand's son,{" "}
              <Typography component="span" color="primary">
                Munna Tripathi{" "}
              </Typography>
              is power hungry and will not stop at anything to inherit his
              father's legacy
            </Typography>
            <div className="shadeImage">
              <img src={Shades} width="100%" />
            </div>
            <Typography variant="p" color="secondary" className="innerText">
              VINCENT CHASE
              <br />
              <Typography variant="p" color="secondary">
                Black Grey Full Rim
              </Typography>
            </Typography>
            <Button
              className={classes.btn}
              color="secondary"
              variant="contained"
            >
              Watch Now
            </Button>
          </div>
          <div className="columnBlock">
            <Avatar
              src={CAST_IMAGE3}
              alt="Maurya-Saab"
              className="roundBlock"
            />
            <Typography component="p" color="secondary" className="innerText">
              An honest cop,{" "}
              <Typography component="span" color="primary">
                Maurya Saab{" "}
              </Typography>
              who goes an extra mile to eliminate the bad and the over-powering
              crime in the city
            </Typography>
            <div className="shadeImage">
              <img src={Shades} width="100%" />
            </div>
            <Typography variant="p" color="secondary" className="innerText">
              VINCENT CHASE
              <br />
              <Typography variant="p" color="secondary">
                Golden Brown Full Rim
              </Typography>
            </Typography>
            <Button
              className={classes.btn}
              color="secondary"
              variant="contained"
            >
              Watch Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cast;

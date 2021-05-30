import React from "react";
import { List, ListItem, ListItemText, makeStyles, Typography } from "@material-ui/core";
import MainBackground from "../assets/jpg/mrjapure-season-2.jpg";
import DividerMark from "./common/DividerMark";
import { TNCLIST } from "../utils/constant";

const useStyle = makeStyles((theme) => ({
  forthContainer: {
    width: "100%",
    background: "#000",
    height: "auto",
    padding: "60px",
    boxSizing: "border-box",
    "& .content": {
      width: "100%",
      borderRadius: "5px",
      maxWidth: "1324px",
      minWidth: "1000px",
      margin: "0 auto",
      minHeight: "300px",
      backgroundColor: "rgb(37, 36, 36)",
      padding: "40px",
      background: "#dcdcdc",
      boxSizing: "border-box",
			'& ol': {
				padding: '15px',
				color: '#fff'
			}
    },
  },
}));

const TnC = () => {
  const classes = useStyle();

  return (
    <div className={classes.forthContainer}>
      <div className="content">
        <Typography variant="h6" color="secondary">
          Terms & Conditions of the Contest
        </Typography>
        <DividerMark variant="fullWidth" />
        <ol>
					{
						TNCLIST.map((list, index) =>
							<li>{list}</li>
						)
					}
				</ol>
      </div>
    </div>
  );
};

export default TnC;

import { Divider, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  divider: {
    width: "50px",
    height: "2px",
    background: "#fff",
    margin: "20px 0px",
  },
}));

const DividerMark = ({ variant }) => {
  const classes = useStyle();
  return (
    <Divider className={classes.divider} component="div" variant={variant} />
  );
};

export default DividerMark;

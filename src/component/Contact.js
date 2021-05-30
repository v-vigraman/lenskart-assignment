import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import EmailIcon from "../assets/png/emailIcon.PNG";
import DividerMark from "./common/DividerMark";

const useStyle = makeStyles((theme) => ({
  contactWrapper: {
    width: "100%",
    minHeight: "120px",
    background: "black",
    padding: "40px",
    boxSizing: "border-box",
    "& .contactContent": {
      width: "1324px",
      height: "auto",
      margin: "0 auto",
    },
  },
  contactBlock: {
    display: "flex",
    justifyContent: "space-between",
    "& .contact": {
      display: "flex",
      "& .contactBox": {
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid #fff",
        borderRadius: "8px",
        minWidth: "130px",
        "& figure": {
          margin: "0px",
          marginRight: "10px",
        },
        "& a": {
          color: "#fff",
        },
      },
      "& .call": {
        marginLeft: "25px",
      },
    },
    "& .columnFlex": {
      display: "flex",
      flexDirection: "column",
      padding: "0 5px 0 10px  ",
      alignContent: "space-between",
    },
  },
}));

const Contact = () => {
  const classes = useStyle();

  return (
    <section className={classes.contactWrapper}>
      <div className="contactContent">
        <Typography component="h5" variant="h5" color="secondary">
          Looking for help?
        </Typography>
        <DividerMark variant="fullWidth" />
        <div className={classes.contactBlock}>
          <Typography component="p" variant="p" color="secondary">
            We are available by phone Monday to Sunday from 9 AM to 8 PM.
            <br />
            Please feel free to call us if you have any queries
          </Typography>
          <div className="contact">
            <aside className="contactBox">
              <figure>
                <img src={EmailIcon} width="40px" />
              </figure>
              <div className="columnFlex">
                <Typography component="p" color="secondary">
                  Email Us
                </Typography>
                <Typography component="p" color="secondary">
                  <a href="mailto:support@lenskart.com">support@lenskart.com</a>
                </Typography>
              </div>
            </aside>
            <aside className="contactBox call">
              <figure>
                <img src={EmailIcon} width="40px" />
              </figure>
              <div className="columnFlex">
                <Typography component="p" color="secondary">
                  Call Us
                </Typography>
                <a href="tel:99998 99998">99998 99998</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

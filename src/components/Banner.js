import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },

  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            varient="h1"
            style={{
              fontWeight: "bold",
              fontSize: "3.5rem",
              textAlign: "center",

              marginBottom: 10,
              fontFamily: "Montserrat",
            }}
          >
            Crypto World
          </Typography>

          <Typography
            varient="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              textAlign: "center",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your fovorite Cryptocurrency at one
            place.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;

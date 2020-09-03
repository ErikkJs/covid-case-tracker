import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading.....";
  }
  return (
    <div className={styles.container}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          item = {false}
          component={Card}
          xs={12}
          md={12}
          className={cx(styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography  variant="h5">
              <Countup
                start={0}
                end={confirmed.value}
                duration={4.0}
                separator=","
                className={styles.infected}
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Cases</Typography>
          </CardContent>
        </Grid>
        <Grid
          item = {false}
          component={Card}
          xs={12}
          md={12}
          className={cx(styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={recovered.value}
                duration={4.0}
                separator=","
                className={styles.recovered}
              />
            </Typography>{" "}
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Recovered</Typography>
          </CardContent>
        </Grid>
        <Grid
        item = {false}
          component={Card}
          xs={12}
          md={12}
          className={cx(styles.card)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={deaths.value}
                duration={4.0}
                separator=","
                className={styles.deaths}
              />
            </Typography>{" "}
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Number of Deaths</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;

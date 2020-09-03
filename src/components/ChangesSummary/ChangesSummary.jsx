import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import styles from "./ChangesSummary.module.css";
import cx from "classnames";

const ChangesSummary = ({ data:  { NewConfirmed, NewDeaths, NewRecovered } }) => {
  if (!NewConfirmed) {
    return "Loading.....";
  }
  console.log(NewConfirmed)
  return (
    <div className={cx(styles.container)}>
      <Card className={cx(styles.card)}>
      <CardContent>
          <Typography gutterBottom variant="h4">
          <Countup
                start={0}
                end={NewConfirmed}
                duration={4.0}
                separator=","
                className={styles.infected}
              />            </Typography>

            <Typography color="textSecondary" gutterBottom>
              New Global Infected
            </Typography>
          </CardContent>

      </Card>
      <Card className={cx(styles.card)}>
      <CardContent>
          <Typography gutterBottom variant="h4">
          <Countup
                start={0}
                end={NewDeaths}
                duration={4.0}
                separator=","
                className={styles.deaths}
              />            </Typography>

            <Typography color="textSecondary" gutterBottom>
              New Global Deaths
            </Typography>
          </CardContent>
      </Card>
      <Card className={cx(styles.card)}>
      <CardContent>
          <Typography gutterBottom variant="h4">
          <Countup
                start={0}
                end={NewRecovered}
                duration={4.0}
                separator=","
                className={styles.recovered}
              />            </Typography>

            <Typography color="textSecondary" gutterBottom>
              New Global Recoveries
            </Typography>
          </CardContent>
      </Card>
    </div>
  );
};

export default ChangesSummary;

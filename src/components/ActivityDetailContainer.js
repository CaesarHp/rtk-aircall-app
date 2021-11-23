import React from "react";
import { useHistory } from "react-router";

import Grid from "@mui/material/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import ActivityDetailCard from "./ActivityDetailCard";

const useStyle = makeStyles((theme) => ({
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    margin: " 2rem 3rem",
  },
}));

function ActivityDetailContainer({
  id,
  createdAt,
  direction,
  from,
  to,
  via,
  duration,
  archive,
  callType,
}) {
  const classes = useStyle();

  const history = useHistory();

  const backHandler = () => {
    history.push("/activity");
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <ActivityDetailCard
            id={id}
            createdAt={createdAt}
            direction={direction}
            from={from}
            to={to}
            via={via}
            duration={duration}
            archive={archive}
            callType={callType}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.btnContainer}>
            <Button
              variant="outlined"
              disableElevation
              onClick={backHandler}
              className={classes.btn}
              startIcon={<KeyboardArrowLeftIcon />}
            >
              Back
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ActivityDetailContainer;

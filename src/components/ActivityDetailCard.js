import React from "react";

import moment from "moment";

import Grid from "@mui/material/Grid";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import PhoneIcon from "@mui/icons-material/Phone";
import VoicemailIcon from "@mui/icons-material/Voicemail";

const useStyle = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  avatar: {
    width: "3.5rem",
    height: "3.5rem",
  },
  calleeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1rem",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
    textAlign: "center",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
  },
}));

function ActivityDetailCard({
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

  const date = moment(createdAt).format("MMMM DD YYYY hh:mm:ss a");

  let phoneIcon;

  if (callType === "missed") {
    phoneIcon = (
      <PhoneMissedIcon fontSize="large" style={{ color: "#f44336" }} />
    );
  } else if (callType === "answered") {
    phoneIcon = <PhoneIcon fontSize="large" style={{ color: "#4caf50" }} />;
  } else if (callType === "voicemail") {
    phoneIcon = <VoicemailIcon fontSize="large" style={{ color: "#2196f3" }} />;
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className={classes.avatarContainer}>
            <Avatar className={classes.avatar} />
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.calleeContainer}>
            <Typography variant="h6">{from}</Typography>
            <Typography variant="body2">
              {callType ? callType.toUpperCase() : callType}{" "}
              {direction ? direction.toUpperCase() : direction}
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.iconContainer}>{phoneIcon}</div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.contentContainer}>
            <Typography variant="body1">To: {to}</Typography>
            <Typography variant="body1">Via: {via}</Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.contentContainer}>
            <Typography variant="body1">{date}</Typography>
            <Typography variant="body1">
              Duration: {duration / 60}min
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.contentContainer}>
            <Typography variant="body1">
              {archive ? "Archived" : null}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ActivityDetailCard;

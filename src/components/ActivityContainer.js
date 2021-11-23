import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetData } from "../store/resetDataSlice";

import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ActivityCard from "./ActivityCard";
import RefreshIcon from "@mui/icons-material/Refresh";

const useStyles = makeStyles((theme) => ({
  noItem: {
    textAlign: "center",
    padding: "1rem 0",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    margin: " 2rem 3rem",
  },
}));

function ActivityContainer() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cardData = useSelector((state) => state.getData.activities);

  const resetHandler = () => {
    dispatch(resetData());
  };

  const filteredCardInfo = cardData
    ? cardData.filter((item) => !item.is_archived)
    : null;

  return (
    <>
      <div className={classes.root}>
        {filteredCardInfo.length > 0 ? (
          filteredCardInfo.map((item, index) => (
            <ActivityCard
              key={index}
              id={item.id}
              createdAt={item.created_at}
              direction={item.direction}
              from={item.from}
              to={item.to}
              via={item.via}
              duration={item.duration}
              archive={item.is_archived}
              callType={item.call_type}
            />
          ))
        ) : (
          <Typography variant="body2" className={classes.noItem}>
            No activity
          </Typography>
        )}
        <div className={classes.btnContainer}>
          <Button
            variant="outlined"
            disableElevation
            onClick={resetHandler}
            className={classes.btn}
            startIcon={<RefreshIcon />}
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
}

export default ActivityContainer;

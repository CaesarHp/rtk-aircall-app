import React from "react";
import { useSelector } from "react-redux";
import { resetData } from "../store/resetDataSlice";
import { useDispatch } from "react-redux";

import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

import ActivityCard from "./ActivityCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  noItem: {
    textAlign: "center",
    padding: "1rem 0",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  },
}));

function ArchiveContainer() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(resetData());
  };

  const cardData = useSelector((state) => state.getData.activities);

  const filteredCardInfo = cardData
    ? cardData.filter((item) => item.is_archived)
    : null;

  return (
    <>
      <div className={classes.root}>
        {filteredCardInfo.length > 0 ? (
          filteredCardInfo.map((item) => (
            <ActivityCard
              key={item.id}
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
            No archived activity
          </Typography>
        )}

        {filteredCardInfo.length > 0 ? (
          <div className={classes.btnContainer}>
            <Button
              variant="outlined"
              disableElevation
              onClick={resetHandler}
              className={classes.btn}
              startIcon={<UnarchiveIcon />}
            >
              Unarchive All
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ArchiveContainer;

import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "0.8rem",
  },
  tabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: "black",
      height: "2px",
    },
  },
}));

function NavTabs() {
  const classes = useStyles();

  const location = useLocation();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (location.pathname === "/activity") {
      setActiveIndex(0);
    } else if (location.pathname === "/archive") {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  }, [location]);

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(14),
      color: "black",
      minWidth: 50,
      margin: "0 3rem",
      "&.Mui-selected": {
        color: "black",
      },
    })
  );

  const tabsInfo = useMemo(
    () => [
      { name: "Activity", link: "/activity" },
      { name: "Archive", link: "/archive" },
    ],
    []
  );

  return (
    <>
      <div className={classes.root}>
        <Tabs variant="fullWidth" value={activeIndex} className={classes.tabs}>
          {tabsInfo.map((item, index) => (
            <StyledTab
              key={index}
              label={item.name}
              component={Link}
              to={item.link}
            />
          ))}
        </Tabs>
      </div>
    </>
  );
}

export default NavTabs;

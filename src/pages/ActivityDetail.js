import React from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import ActivityDetailContainer from "../components/ActivityDetailContainer";

function ActivityDetail() {
  const params = useParams();

  const allData = useSelector((state) => state.getData.activities);
  const detailData = allData.find(
    (item) => item.id === Number(params.activityId)
  );

  if (!detailData.id) {
    return <div style={{ textAlign: "center" }}> Page not found</div>;
  }

  return (
    <>
      <ActivityDetailContainer
        id={detailData.id}
        createdAt={detailData.created_at}
        direction={detailData.direction}
        from={detailData.from}
        to={detailData.to}
        via={detailData.via}
        duration={detailData.duration}
        archive={detailData.is_archived}
        callType={detailData.call_type}
      />
    </>
  );
}

export default ActivityDetail;

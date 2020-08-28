import React, { useEffect } from "react";

export const ListEvents = (props) => {
  const { events } = props;
  return (
    <div>
      {events.map((event, index) => (
        <p>{`${event.startTime} -- ${event.title}`}</p>
      ))}
    </div>
  );
};

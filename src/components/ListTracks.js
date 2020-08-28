import React, { useEffect } from "react";
import { ListEvents } from "./ListEvents";

export const ListTracks = (props) => {
  const { tracks } = props;

  useEffect(() => console.log(tracks), [tracks]);

  return (
    <div>
      {tracks.map((track, index) => (
        <div>
          <p>Track</p>
          <ListEvents events={track} key={index}></ListEvents>
        </div>
      ))}
    </div>
  );
};

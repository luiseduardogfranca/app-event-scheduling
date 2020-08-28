import React, { useEffect } from "react";
import { ListEvents } from "./ListEvents";
import { ContainerTrack, Track } from "./style";
export const ListTracks = (props) => {
  const { tracks } = props;
  return (
    <ContainerTrack>
      {tracks.map((track, index) => (
        <Track>
          <p class="title">Track {index + 1}</p>
          <ListEvents events={track} key={index}></ListEvents>
        </Track>
      ))}
    </ContainerTrack>
  );
};

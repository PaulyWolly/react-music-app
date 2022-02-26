import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls";
import Details from "./Details";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className="c-player">
      <h3 className="pauls-player">Paul's Player</h3>
      <Details song={props.songs[props.currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <audio
        className="c-player--audio"
        src={props.songs[props.currentSongIndex].src}
        ref={audioEl}
        controls
      ></audio>
      <p>
        Next up:{" "}
        <small>
          {props.songs[props.nextSongIndex].title} by{" "}
          <em>{props.songs[props.nextSongIndex].artist}</em>
        </small>
      </p>
    </div>
  );
}

export default Player;

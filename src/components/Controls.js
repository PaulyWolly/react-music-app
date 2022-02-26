import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon  className="pause-icon" icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >

        <FontAwesomeIcon className="playPause-icon" icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default Controls;

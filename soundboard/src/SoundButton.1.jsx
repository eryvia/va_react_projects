import { useRef } from 'react';
import { useState } from 'react'

export const SoundButton = ({ title, audioSrc, clickFunc}) => {
  const audioRef = useRef(null);
  const [single, setSingle] = useState(0)

  const clickSingle = () => {
    setSingle(single + 1)
  }

  const handleClick = () => {
    clickFunc()
    audioRef.current.play();
    clickSingle()
  };
  
  return <>
    <audio ref={audioRef} src={audioSrc}></audio>
    <button onClick={handleClick}>{title} + {single}</button>
  </>;
};
